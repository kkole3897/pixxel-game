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
      game_scrape_task: {
        Row: {
          completed_at: string | null;
          created_at: string;
          deleted_at: string | null;
          executed_at: string | null;
          failed_at: string | null;
          id: number;
          referenced_id: number | null;
          retry_at: string | null;
          retry_count: number;
          schedule_at: string | null;
          type: Database['public']['Enums']['game_scrape_type'];
          updated_at: string | null;
        };
        Insert: {
          completed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          executed_at?: string | null;
          failed_at?: string | null;
          id?: number;
          referenced_id?: number | null;
          retry_at?: string | null;
          retry_count?: number;
          schedule_at?: string | null;
          type: Database['public']['Enums']['game_scrape_type'];
          updated_at?: string | null;
        };
        Update: {
          completed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          executed_at?: string | null;
          failed_at?: string | null;
          id?: number;
          referenced_id?: number | null;
          retry_at?: string | null;
          retry_count?: number;
          schedule_at?: string | null;
          type?: Database['public']['Enums']['game_scrape_type'];
          updated_at?: string | null;
        };
        Relationships: [];
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
    };
    Views: {
      [_ in never]: never;
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
      auth_provider: 'kakao';
      game_drm: 'steam' | 'epic';
      game_scrape_type:
        | 'new_game'
        | 'update_game'
        | 'update_meta_critic'
        | 'update_open_critic'
        | 'update_steam_score';
      game_store: 'steam' | 'epic';
      game_type: 'game' | 'dlc' | 'bundle';
      open_critic_tier: 'Weak' | 'Fair' | 'Strong' | 'Mighty';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_bucket_id_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_parts_bucket_id_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 's3_multipart_uploads_parts_upload_id_fkey';
            columns: ['upload_id'];
            isOneToOne: false;
            referencedRelation: 's3_multipart_uploads';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
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
