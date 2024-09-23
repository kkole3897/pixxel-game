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
          combined_title: string;
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
          combined_title?: string;
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
          combined_title?: string;
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
          {
            foreignKeyName: 'games_base_game_id_fkey';
            columns: ['base_game_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
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
            foreignKeyName: 'game_bundle_contents_bundle_id_fkey';
            columns: ['bundle_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'game_bundle_contents_included_game_id_fkey';
            columns: ['included_game_id'];
            isOneToOne: false;
            referencedRelation: 'game';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'game_bundle_contents_included_game_id_fkey';
            columns: ['included_game_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
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
          price_updated_at: string;
          raw_catalog_meta_data: Json | null;
          regular_price: number | null;
          sales_ended_at: string | null;
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
          price_updated_at?: string;
          raw_catalog_meta_data?: Json | null;
          regular_price?: number | null;
          sales_ended_at?: string | null;
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
          price_updated_at?: string;
          raw_catalog_meta_data?: Json | null;
          regular_price?: number | null;
          sales_ended_at?: string | null;
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
          {
            foreignKeyName: 'game_integrated_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
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
            foreignKeyName: 'game_wishlist_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
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
          {
            foreignKeyName: 'meta_critic_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: true;
            referencedRelation: 'game_effective_price_updated_at_view';
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
          {
            foreignKeyName: 'open_critic_integrated_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: true;
            referencedRelation: 'game_effective_price_updated_at_view';
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
      requested_game: {
        Row: {
          completed_at: string | null;
          created_at: string;
          deleted_at: string | null;
          failed_at: string | null;
          game_catalog_id: number | null;
          game_id: number | null;
          id: number;
          slug: string;
          store: Database['public']['Enums']['game_store'];
          title: string;
          updated_at: string | null;
        };
        Insert: {
          completed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          failed_at?: string | null;
          game_catalog_id?: number | null;
          game_id?: number | null;
          id?: number;
          slug: string;
          store: Database['public']['Enums']['game_store'];
          title: string;
          updated_at?: string | null;
        };
        Update: {
          completed_at?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          failed_at?: string | null;
          game_catalog_id?: number | null;
          game_id?: number | null;
          id?: number;
          slug?: string;
          store?: Database['public']['Enums']['game_store'];
          title?: string;
          updated_at?: string | null;
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
            foreignKeyName: 'game_tracking_request_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
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
          {
            foreignKeyName: 'steam_score_game_id_fkey';
            columns: ['game_id'];
            isOneToOne: true;
            referencedRelation: 'game_effective_price_updated_at_view';
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
      game_effective_price_updated_at_view: {
        Row: {
          base_game_id: number | null;
          confirmed_at: string | null;
          created_at: string | null;
          deleted_at: string | null;
          description: string | null;
          developers: string[] | null;
          effective_price_updated_at: string | null;
          id: number | null;
          is_free: boolean | null;
          main_image: string | null;
          public_id: string | null;
          publishers: string[] | null;
          release_day: number | null;
          release_month: number | null;
          release_year: number | null;
          screenshots: string[] | null;
          summary: string | null;
          tags: string[] | null;
          title: string | null;
          title_ko: string | null;
          type: Database['public']['Enums']['game_type'] | null;
          updated_at: string | null;
        };
        Insert: {
          base_game_id?: number | null;
          confirmed_at?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          description?: string | null;
          developers?: string[] | null;
          effective_price_updated_at?: never;
          id?: number | null;
          is_free?: boolean | null;
          main_image?: string | null;
          public_id?: string | null;
          publishers?: string[] | null;
          release_day?: number | null;
          release_month?: number | null;
          release_year?: number | null;
          screenshots?: string[] | null;
          summary?: string | null;
          tags?: string[] | null;
          title?: string | null;
          title_ko?: string | null;
          type?: Database['public']['Enums']['game_type'] | null;
          updated_at?: string | null;
        };
        Update: {
          base_game_id?: number | null;
          confirmed_at?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          description?: string | null;
          developers?: string[] | null;
          effective_price_updated_at?: never;
          id?: number | null;
          is_free?: boolean | null;
          main_image?: string | null;
          public_id?: string | null;
          publishers?: string[] | null;
          release_day?: number | null;
          release_month?: number | null;
          release_year?: number | null;
          screenshots?: string[] | null;
          summary?: string | null;
          tags?: string[] | null;
          title?: string | null;
          title_ko?: string | null;
          type?: Database['public']['Enums']['game_type'] | null;
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
          {
            foreignKeyName: 'games_base_game_id_fkey';
            columns: ['base_game_id'];
            isOneToOne: false;
            referencedRelation: 'game_effective_price_updated_at_view';
            referencedColumns: ['id'];
          },
        ];
      };
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
      pgroonga_command:
        | {
            Args: {
              groongacommand: string;
            };
            Returns: string;
          }
        | {
            Args: {
              groongacommand: string;
              arguments: string[];
            };
            Returns: string;
          };
      pgroonga_command_escape_value: {
        Args: {
          value: string;
        };
        Returns: string;
      };
      pgroonga_equal_query_text_array: {
        Args: {
          targets: string[];
          query: string;
        };
        Returns: boolean;
      };
      pgroonga_equal_query_varchar_array: {
        Args: {
          targets: string[];
          query: string;
        };
        Returns: boolean;
      };
      pgroonga_equal_text: {
        Args: {
          target: string;
          other: string;
        };
        Returns: boolean;
      };
      pgroonga_equal_text_condition: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_equal_varchar: {
        Args: {
          target: string;
          other: string;
        };
        Returns: boolean;
      };
      pgroonga_equal_varchar_condition: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_escape:
        | {
            Args: {
              value: boolean;
            };
            Returns: string;
          }
        | {
            Args: {
              value: number;
            };
            Returns: string;
          }
        | {
            Args: {
              value: number;
            };
            Returns: string;
          }
        | {
            Args: {
              value: number;
            };
            Returns: string;
          }
        | {
            Args: {
              value: number;
            };
            Returns: string;
          }
        | {
            Args: {
              value: number;
            };
            Returns: string;
          }
        | {
            Args: {
              value: string;
            };
            Returns: string;
          }
        | {
            Args: {
              value: string;
            };
            Returns: string;
          }
        | {
            Args: {
              value: string;
            };
            Returns: string;
          }
        | {
            Args: {
              value: string;
              special_characters: string;
            };
            Returns: string;
          };
      pgroonga_flush: {
        Args: {
          indexname: unknown;
        };
        Returns: boolean;
      };
      pgroonga_handler: {
        Args: {
          '': unknown;
        };
        Returns: unknown;
      };
      pgroonga_highlight_html:
        | {
            Args: {
              target: string;
              keywords: string[];
            };
            Returns: string;
          }
        | {
            Args: {
              target: string;
              keywords: string[];
              indexname: unknown;
            };
            Returns: string;
          }
        | {
            Args: {
              targets: string[];
              keywords: string[];
            };
            Returns: string[];
          }
        | {
            Args: {
              targets: string[];
              keywords: string[];
              indexname: unknown;
            };
            Returns: string[];
          };
      pgroonga_index_column_name:
        | {
            Args: {
              indexname: unknown;
              columnindex: number;
            };
            Returns: string;
          }
        | {
            Args: {
              indexname: unknown;
              columnname: string;
            };
            Returns: string;
          };
      pgroonga_is_writable: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      pgroonga_match_positions_byte:
        | {
            Args: {
              target: string;
              keywords: string[];
            };
            Returns: number[];
          }
        | {
            Args: {
              target: string;
              keywords: string[];
              indexname: unknown;
            };
            Returns: number[];
          };
      pgroonga_match_positions_character:
        | {
            Args: {
              target: string;
              keywords: string[];
            };
            Returns: number[];
          }
        | {
            Args: {
              target: string;
              keywords: string[];
              indexname: unknown;
            };
            Returns: number[];
          };
      pgroonga_match_term:
        | {
            Args: {
              target: string[];
              term: string;
            };
            Returns: boolean;
          }
        | {
            Args: {
              target: string[];
              term: string;
            };
            Returns: boolean;
          }
        | {
            Args: {
              target: string;
              term: string;
            };
            Returns: boolean;
          }
        | {
            Args: {
              target: string;
              term: string;
            };
            Returns: boolean;
          };
      pgroonga_match_text_array_condition: {
        Args: {
          target: string[];
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_match_text_array_condition_with_scorers: {
        Args: {
          target: string[];
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition_with_scorers'];
        };
        Returns: boolean;
      };
      pgroonga_match_text_condition: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_match_text_condition_with_scorers: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition_with_scorers'];
        };
        Returns: boolean;
      };
      pgroonga_match_varchar_condition: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_match_varchar_condition_with_scorers: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition_with_scorers'];
        };
        Returns: boolean;
      };
      pgroonga_normalize:
        | {
            Args: {
              target: string;
            };
            Returns: string;
          }
        | {
            Args: {
              target: string;
              normalizername: string;
            };
            Returns: string;
          };
      pgroonga_prefix_varchar_condition: {
        Args: {
          target: string;
          conditoin: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_query_escape: {
        Args: {
          query: string;
        };
        Returns: string;
      };
      pgroonga_query_expand: {
        Args: {
          tablename: unknown;
          termcolumnname: string;
          synonymscolumnname: string;
          query: string;
        };
        Returns: string;
      };
      pgroonga_query_extract_keywords: {
        Args: {
          query: string;
          index_name?: string;
        };
        Returns: string[];
      };
      pgroonga_query_text_array_condition: {
        Args: {
          targets: string[];
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_query_text_array_condition_with_scorers: {
        Args: {
          targets: string[];
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition_with_scorers'];
        };
        Returns: boolean;
      };
      pgroonga_query_text_condition: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_query_text_condition_with_scorers: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition_with_scorers'];
        };
        Returns: boolean;
      };
      pgroonga_query_varchar_condition: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition'];
        };
        Returns: boolean;
      };
      pgroonga_query_varchar_condition_with_scorers: {
        Args: {
          target: string;
          condition: Database['public']['CompositeTypes']['pgroonga_full_text_search_condition_with_scorers'];
        };
        Returns: boolean;
      };
      pgroonga_result_to_jsonb_objects: {
        Args: {
          result: Json;
        };
        Returns: Json;
      };
      pgroonga_result_to_recordset: {
        Args: {
          result: Json;
        };
        Returns: Record<string, unknown>[];
      };
      pgroonga_score:
        | {
            Args: {
              row: Record<string, unknown>;
            };
            Returns: number;
          }
        | {
            Args: {
              tableoid: unknown;
              ctid: unknown;
            };
            Returns: number;
          };
      pgroonga_set_writable: {
        Args: {
          newwritable: boolean;
        };
        Returns: boolean;
      };
      pgroonga_snippet_html: {
        Args: {
          target: string;
          keywords: string[];
          width?: number;
        };
        Returns: string[];
      };
      pgroonga_table_name: {
        Args: {
          indexname: unknown;
        };
        Returns: string;
      };
      pgroonga_tokenize: {
        Args: {
          target: string;
        };
        Returns: Json[];
      };
      pgroonga_vacuum: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      pgroonga_wal_apply:
        | {
            Args: Record<PropertyKey, never>;
            Returns: number;
          }
        | {
            Args: {
              indexname: unknown;
            };
            Returns: number;
          };
      pgroonga_wal_set_applied_position:
        | {
            Args: Record<PropertyKey, never>;
            Returns: boolean;
          }
        | {
            Args: {
              block: number;
              offset: number;
            };
            Returns: boolean;
          }
        | {
            Args: {
              indexname: unknown;
            };
            Returns: boolean;
          }
        | {
            Args: {
              indexname: unknown;
              block: number;
              offset: number;
            };
            Returns: boolean;
          };
      pgroonga_wal_status: {
        Args: Record<PropertyKey, never>;
        Returns: {
          name: string;
          oid: unknown;
          current_block: number;
          current_offset: number;
          current_size: number;
          last_block: number;
          last_offset: number;
          last_size: number;
        }[];
      };
      pgroonga_wal_truncate:
        | {
            Args: Record<PropertyKey, never>;
            Returns: number;
          }
        | {
            Args: {
              indexname: unknown;
            };
            Returns: number;
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
      pgroonga_full_text_search_condition: {
        query: string | null;
        weigths: number[] | null;
        indexname: string | null;
      };
      pgroonga_full_text_search_condition_with_scorers: {
        query: string | null;
        weigths: number[] | null;
        scorers: string[] | null;
        indexname: string | null;
      };
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
