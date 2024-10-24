import { act, render, getByText, screen } from '@testing-library/react';
import userEvent, {
  PointerEventsCheckLevel,
} from '@testing-library/user-event';

import SlugTypeSelect, { type SlugTypeSelectProps } from './slug-type-select';

function renderSlugTypeSelect(props: SlugTypeSelectProps) {
  const result = render(<SlugTypeSelect {...props} />);

  const Select = () => result.getByRole('combobox');

  const Options = () => screen.getAllByRole('option');

  const clickSelect = async () => {
    await act(async () => {
      await userEvent.click(Select());
    });
  };

  return {
    Select,
    Options,
    clickSelect,
    rerender: result.rerender,
  };
}

describe('<SlugTypeSelect />', () => {
  beforeEach(() => {
    /**
     * JSDOM doesn't implement PointerEvent so we need to mock our own implementation
     * Default to mouse left click interaction
     * https://github.com/radix-ui/primitives/issues/1822
     * https://github.com/jsdom/jsdom/pull/2666
     */
    class MockPointerEvent extends Event {
      button: number;
      ctrlKey: boolean;
      pointerType: string;

      constructor(type: string, props: PointerEventInit) {
        super(type, props);
        this.button = props.button || 0;
        this.ctrlKey = props.ctrlKey || false;
        this.pointerType = props.pointerType || 'mouse';
      }
    }

    window.PointerEvent = MockPointerEvent as any;
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    window.HTMLElement.prototype.releasePointerCapture = jest.fn();
    window.HTMLElement.prototype.hasPointerCapture = jest.fn();
  });

  describe('common', () => {
    it('should be error if not available value is provided', () => {
      const { Select } = renderSlugTypeSelect({
        store: 'steam',
        defaultValue: 'p',
      });

      expect(Select()).toHaveAttribute('aria-invalid', 'true');
      expect(Select().textContent).toBe('');
    });
  });

  describe('steam', () => {
    it('should render steam options when opened', async () => {
      const { Select, clickSelect } = renderSlugTypeSelect({
        store: 'steam',
      });

      expect(Select()).toBeInTheDocument();

      await clickSelect();

      const options = screen.getAllByRole('option');

      expect(options.map((option) => option.textContent)).toEqual([
        'app',
        'sub',
        'bundle',
      ]);
    });

    it('app should be selected by default', () => {
      const { Select } = renderSlugTypeSelect({
        store: 'steam',
      });

      expect(Select()).toHaveTextContent('app');
    });

    it('can change default selected if default value is provided', () => {
      const { Select } = renderSlugTypeSelect({
        store: 'steam',
        defaultValue: 'sub',
      });

      expect(Select()).toHaveTextContent('sub');
    });
  });

  describe('epic', () => {
    it('should render epic options when opened', async () => {
      const { Select, clickSelect } = renderSlugTypeSelect({
        store: 'epic',
      });

      expect(Select()).toBeInTheDocument();

      await clickSelect();

      const options = screen.getAllByRole('option');
      expect(options.map((option) => option.textContent)).toEqual([
        'p',
        'bundles',
      ]);
    });

    it('app should be selected by default', () => {
      const { Select } = renderSlugTypeSelect({
        store: 'epic',
      });

      expect(Select()).toHaveTextContent('p');
    });

    it('can change default selected if default value is provided', () => {
      const { Select } = renderSlugTypeSelect({
        store: 'epic',
        defaultValue: 'bundles',
      });

      expect(Select()).toHaveTextContent('bundles');
    });
  });

  describe('switching', () => {
    it('should be default value if store is switched', () => {
      const { Select, rerender } = renderSlugTypeSelect({
        store: 'steam',
      });

      rerender(<SlugTypeSelect store="epic" />);

      expect(Select()).toHaveTextContent('p');

      rerender(<SlugTypeSelect store="steam" />);

      expect(Select()).toHaveTextContent('app');
    });
  });
});
