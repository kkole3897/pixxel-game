import { extendsFetch } from '../lib/fetch';
import { coreApiUrl } from '../config';

export const coreApi = extendsFetch({ baseUrl: coreApiUrl });
