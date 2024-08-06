export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      game: {
        Row: {
          base_game_id: number | null;
          confirmed_at: string | null;
          created_at: string;
          deleted_at: string | null;
          description: string | null;
          developers: string[];
          id: number;
          is_free: boolean;
          main_image: string | null;
          public_id: string;
          publishers: string[];
          release_day: number | null;
          release_month: number | null;
          release_year: number | null;
          screenshots: string[];
          summary: string | null;
          tags: string[];
          title: string | null;
          title_ko: string | null;
          type: Database['public']['Enums']['game_type'];
          updated_at: string | null;
        };
        Insert: {
          base_game_id?: number | null;
          confirmed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          developers?: string[];
          id?: number;
          is_free?: boolean;
          main_image?: string | null;
          public_id?: string;
          publishers?: string[];
          release_day?: number | null;
          release_month?: number | null;
          release_year?: number | null;
          screenshots?: string[];
          summary?: string | null;
          tags?: string[];
          title?: string | null;
          title_ko?: string | null;
          type?: Database['public']['Enums']['game_type'];
          updated_at?: string | null;
        };
        Update: {
          base_game_id?: number | null;
          confirmed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          developers?: string[];
          id?: number;
          is_free?: boolean;
          main_image?: string | null;
          public_id?: string;
          publishers?: string[];
          release_day?: number | null;
          release_month?: number | null;
          release_year?: number | null;
          screenshots?: string[];
          summary?: string | null;
          tags?: string[];
          title?: string | null;
          title_ko?: string | null;
          type?: Database['public']['Enums']['game_type'];
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'games_base_game_id_fkey';
            columns: ['base_game_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
        ];
      };
      game_bundle_content: {
        Row: {
          bundle_id: number | null;
          created_at: string;
          deleted_at: string | null;
          id: number;
          included_game_id: number | null;
          updated_at: string | null;
        };
        Insert: {
          bundle_id?: number | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          included_game_id?: number | null;
          updated_at?: string | null;
        };
        Update: {
          bundle_id?: number | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          included_game_id?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'game_bundle_contents_bundle_id_fkey';
            columns: ['bundle_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'game_bundle_contents_included_game_id_fkey';
            columns: ['included_game_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
        ];
      };
      game_catalog: {
        Row: {
          confirmed_at: string | null;
          created_at: string;
          current_price: number | null;
          current_price_expire_at: string | null;
          deleted_at: string | null;
          drm: Database['public']['Enums']['game_drm'];
          game_id: number | null;
          id: number;
          lowest_price: number | null;
          lowest_price_updated_at: string | null;
          original_id: string;
          original_slug: string;
          original_title: string | null;
          original_title_ko: string | null;
          regular_price: number | null;
          store: Database['public']['Enums']['game_store'];
          updated_at: string | null;
          url: string;
        };
        Insert: {
          confirmed_at?: string | null;
          created_at?: string;
          current_price?: number | null;
          current_price_expire_at?: string | null;
          deleted_at?: string | null;
          drm: Database['public']['Enums']['game_drm'];
          game_id?: number | null;
          id?: number;
          lowest_price?: number | null;
          lowest_price_updated_at?: string | null;
          original_id: string;
          original_slug: string;
          original_title?: string | null;
          original_title_ko?: string | null;
          regular_price?: number | null;
          store: Database['public']['Enums']['game_store'];
          updated_at?: string | null;
          url: string;
        };
        Update: {
          confirmed_at?: string | null;
          created_at?: string;
          current_price?: number | null;
          current_price_expire_at?: string | null;
          deleted_at?: string | null;
          drm?: Database['public']['Enums']['game_drm'];
          game_id?: number | null;
          id?: number;
          lowest_price?: number | null;
          lowest_price_updated_at?: string | null;
          original_id?: string;
          original_slug?: string;
          original_title?: string | null;
          original_title_ko?: string | null;
          regular_price?: number | null;
          store?: Database['public']['Enums']['game_store'];
          updated_at?: string | null;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'game_integrated_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
        ];
      };
      game_price_log: {
        Row: {
          created_at: string;
          current_price: number;
          deleted_at: string | null;
          end_at: string | null;
          game_catalog_id: number | null;
          id: number;
          regular_price: number;
          start_at: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          current_price: number;
          deleted_at?: string | null;
          end_at?: string | null;
          game_catalog_id?: number | null;
          id?: number;
          regular_price: number;
          start_at?: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          current_price?: number;
          deleted_at?: string | null;
          end_at?: string | null;
          game_catalog_id?: number | null;
          id?: number;
          regular_price?: number;
          start_at?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'game_price_log_game_catalog_id_fkey';
            columns: ['game_catalog_id'];
            isOneToOne: false;
            referencedRelation: 'game_catalog';
            referencedColumns: ['id'];
          },
        ];
      };
      game_wishlist: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          game_id: number | null;
          id: number;
          next_id: number | null;
          prev_id: number | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          next_id?: number | null;
          prev_id?: number | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          next_id?: number | null;
          prev_id?: number | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'game_wishlist_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'game_wishlist_next_id_fkey';
            columns: ['next_id'];
            isOneToOne: false;
            referencedRelation: 'game_wishlist';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'game_wishlist_prev_id_fkey';
            columns: ['prev_id'];
            isOneToOne: false;
            referencedRelation: 'game_wishlist';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'game_wishlist_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      meta_critic: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          game_id: number | null;
          id: number;
          meta_score: number | null;
          meta_score_url: string;
          updated_at: string | null;
          user_score: number | null;
          user_score_url: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          meta_score?: number | null;
          meta_score_url: string;
          updated_at?: string | null;
          user_score?: number | null;
          user_score_url: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          meta_score?: number | null;
          meta_score_url?: string;
          updated_at?: string | null;
          user_score?: number | null;
          user_score_url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'meta_critic_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: true;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
        ];
      };
      new_game_request: {
        Row: {
          completed_at: string | null;
          created_at: string;
          deleted_at: string | null;
          game_catalog_id: number | null;
          game_id: number | null;
          id: number;
          is_valid: boolean;
          updated_at: string | null;
          url: string;
        };
        Insert: {
          completed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          game_catalog_id?: number | null;
          game_id?: number | null;
          id?: number;
          is_valid?: boolean;
          updated_at?: string | null;
          url: string;
        };
        Update: {
          completed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          game_catalog_id?: number | null;
          game_id?: number | null;
          id?: number;
          is_valid?: boolean;
          updated_at?: string | null;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'game_tracking_request_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'new_game_request_game_catalog_id_fkey';
            columns: ['game_catalog_id'];
            isOneToOne: false;
            referencedRelation: 'game_catalog';
            referencedColumns: ['id'];
          },
        ];
      };
      open_critic: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          game_id: number | null;
          id: number;
          percent_recommended: number | null;
          tier: Database['public']['Enums']['open_critic_tier'] | null;
          top_critic_score: number | null;
          updated_at: string | null;
          url: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          percent_recommended?: number | null;
          tier?: Database['public']['Enums']['open_critic_tier'] | null;
          top_critic_score?: number | null;
          updated_at?: string | null;
          url: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          percent_recommended?: number | null;
          tier?: Database['public']['Enums']['open_critic_tier'] | null;
          top_critic_score?: number | null;
          updated_at?: string | null;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'open_critic_integrated_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: true;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
        ];
      };
      profile: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          deleted_at: string | null;
          email: string;
          id: string;
          name: string;
          providers: Database['public']['Enums']['auth_provider'][];
          updated_at: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          email: string;
          id?: string;
          name: string;
          providers: Database['public']['Enums']['auth_provider'][];
          updated_at?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          email?: string;
          id?: string;
          name?: string;
          providers?: Database['public']['Enums']['auth_provider'][];
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_profile_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      steam_score: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          game_id: number | null;
          id: number;
          positive: number | null;
          total: number | null;
          updated_at: string | null;
          url: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          positive?: number | null;
          total?: number | null;
          updated_at?: string | null;
          url: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          game_id?: number | null;
          id?: number;
          positive?: number | null;
          total?: number | null;
          updated_at?: string | null;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'steam_score_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: true;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
        ];
      };
      update_game_price_schedule_log: {
        Row: {
          created_at: string;
          end_at: string | null;
          error_message: string | null;
          game_catalog_id: number | null;
          id: number;
          retry_at: string | null;
          retry_count: number;
          schedule_at: string;
          start_at: string | null;
          status: Database['public']['Enums']['scraping_schedule_status'];
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          end_at?: string | null;
          error_message?: string | null;
          game_catalog_id?: number | null;
          id?: number;
          retry_at?: string | null;
          retry_count?: number;
          schedule_at: string;
          start_at?: string | null;
          status?: Database['public']['Enums']['scraping_schedule_status'];
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          end_at?: string | null;
          error_message?: string | null;
          game_catalog_id?: number | null;
          id?: number;
          retry_at?: string | null;
          retry_count?: number;
          schedule_at?: string;
          start_at?: string | null;
          status?: Database['public']['Enums']['scraping_schedule_status'];
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_update_game_price_schedule_log_game_catalog_id_fkey';
            columns: ['game_catalog_id'];
            isOneToOne: false;
            referencedRelation: 'game_catalog';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      update_game_price_schedule_log_rank_view: {
        Row: {
          created_at: string | null;
          end_at: string | null;
          error_message: string | null;
          game_catalog_id: number | null;
          id: number | null;
          rank: number | null;
          retry_at: string | null;
          retry_count: number | null;
          schedule_at: string | null;
          start_at: string | null;
          status:
            | Database['public']['Enums']['scraping_schedule_status']
            | null;
          updated_at: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_update_game_price_schedule_log_game_catalog_id_fkey';
            columns: ['game_catalog_id'];
            isOneToOne: false;
            referencedRelation: 'game_catalog';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Functions: {
      delete_wish: {
        Args: {
          wish_id: number;
        };
        Returns: undefined;
      };
      get_best_price_history_by_game_public_id: {
        Args: {
          game_public_id: string;
        };
        Returns: {
          start_at: string;
          min_price: number;
        }[];
      };
      get_lowest_price_ranks: {
        Args: {
          game_public_id: string;
        };
        Returns: {
          id: number;
          current_price: number;
          start_at: string;
          store: Database['public']['Enums']['game_store'];
        }[];
      };
      get_update_game_targets: {
        Args: Record<PropertyKey, never>;
        Returns: {
          created_at: string | null;
          end_at: string | null;
          error_message: string | null;
          game_catalog_id: number | null;
          id: number | null;
          rank: number | null;
          retry_at: string | null;
          retry_count: number | null;
          schedule_at: string | null;
          start_at: string | null;
          status:
            | Database['public']['Enums']['scraping_schedule_status']
            | null;
          updated_at: string | null;
        }[];
      };
      get_wishlist: {
        Args: Record<PropertyKey, never>;
        Returns: {
          created_at: string;
          deleted_at: string | null;
          game_id: number | null;
          id: number;
          next_id: number | null;
          prev_id: number | null;
          updated_at: string | null;
          user_id: string;
        }[];
      };
      insert_last_wish_by_game_public_id: {
        Args: {
          game_public_id: string;
        };
        Returns: {
          created_at: string;
          deleted_at: string | null;
          game_id: number | null;
          id: number;
          next_id: number | null;
          prev_id: number | null;
          updated_at: string | null;
          user_id: string;
        };
      };
    };
    Enums: {
      auth_provider: 'kakao' | 'google';
      game_drm: 'steam' | 'epic';
      game_store: 'steam' | 'epic';
      game_type: 'game' | 'dlc' | 'bundle' | 'extra';
      open_critic_tier: 'Weak' | 'Fair' | 'Strong' | 'Mighty';
      scraping_schedule_status: 'wait' | 'success' | 'fail' | 'skip';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
