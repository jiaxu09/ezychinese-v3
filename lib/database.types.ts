
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      favorites: {
        Row: {
          id: string
          link: string | null
          pubDate: string | null
          publisher: string
          title: string
          userId: string
        }
        Insert: {
          id?: string
          link?: string | null
          pubDate?: string | null
          publisher?: string
          title: string
          userId: string
        }
        Update: {
          id?: string
          link?: string | null
          pubDate?: string | null
          publisher?: string
          title?: string
          userId?: string
        }
        Relationships: []
      }
      idioms: {
        Row: {
          background_url: string | null
          created_at: string
          example: string[]
          example_meaning: string
          example_pinyin: string[]
          id: string
          idiom_meaning: string | null
          idiom_pinyin: string[]
          name: string[]
        }
        Insert: {
          background_url?: string | null
          created_at?: string
          example: string[]
          example_meaning: string
          example_pinyin: string[]
          id?: string
          idiom_meaning?: string | null
          idiom_pinyin: string[]
          name: string[]
        }
        Update: {
          background_url?: string | null
          created_at?: string
          example?: string[]
          example_meaning?: string
          example_pinyin?: string[]
          id?: string
          idiom_meaning?: string | null
          idiom_pinyin?: string[]
          name?: string[]
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          image_url: string | null
          role: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id: string
          image_url?: string | null
          role?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          image_url?: string | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      radicals: {
        Row: {
          background_url: string | null
          characters: string[]
          characters_meanings: string[] | null
          characters_pinyins: string[] | null
          created_at: string
          id: string
          name: string
          radical_explain: string[] | null
          radical_explain_pinyin: string[] | null
          radical_meaning: string | null
          radical_pinyin: string | null
        }
        Insert: {
          background_url?: string | null
          characters: string[]
          characters_meanings?: string[] | null
          characters_pinyins?: string[] | null
          created_at?: string
          id?: string
          name: string
          radical_explain?: string[] | null
          radical_explain_pinyin?: string[] | null
          radical_meaning?: string | null
          radical_pinyin?: string | null
        }
        Update: {
          background_url?: string | null
          characters?: string[]
          characters_meanings?: string[] | null
          characters_pinyins?: string[] | null
          created_at?: string
          id?: string
          name?: string
          radical_explain?: string[] | null
          radical_explain_pinyin?: string[] | null
          radical_meaning?: string | null
          radical_pinyin?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
