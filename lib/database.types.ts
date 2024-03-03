
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
      correct_order: {
        Row: {
          answer: string
          created_at: string
          id: string
          question: string[]
          source: string
        }
        Insert: {
          answer: string
          created_at?: string
          id?: string
          question: string[]
          source: string
        }
        Update: {
          answer?: string
          created_at?: string
          id?: string
          question?: string[]
          source?: string
        }
        Relationships: []
      }
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
      find_difference: {
        Row: {
          answer: string
          created_at: string
          id: string
          question: string[]
          source: string
        }
        Insert: {
          answer: string
          created_at?: string
          id?: string
          question: string[]
          source: string
        }
        Update: {
          answer?: string
          created_at?: string
          id?: string
          question?: string[]
          source?: string
        }
        Relationships: []
      }
      form_phrases: {
        Row: {
          answers: string[]
          choices_a: string[]
          choices_b: string[]
          created_at: string
          id: string
          source: string
        }
        Insert: {
          answers: string[]
          choices_a: string[]
          choices_b: string[]
          created_at?: string
          id?: string
          source: string
        }
        Update: {
          answers?: string[]
          choices_a?: string[]
          choices_b?: string[]
          created_at?: string
          id?: string
          source?: string
        }
        Relationships: []
      }
      hanyu_books: {
        Row: {
          created_at: string
          id: string
          image: string
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          name?: string | null
        }
        Relationships: []
      }
      hanyu_sentences: {
        Row: {
          audio: string
          created_at: string
          id: string
          image: string
          sentence: string
          source: string
        }
        Insert: {
          audio: string
          created_at?: string
          id?: string
          image: string
          sentence: string
          source: string
        }
        Update: {
          audio?: string
          created_at?: string
          id?: string
          image?: string
          sentence?: string
          source?: string
        }
        Relationships: []
      }
      hanyu_texts: {
        Row: {
          audio: string
          created_at: string
          id: string
          image: string
          sentence: string
          source: string
        }
        Insert: {
          audio: string
          created_at?: string
          id?: string
          image: string
          sentence: string
          source: string
        }
        Update: {
          audio?: string
          created_at?: string
          id?: string
          image?: string
          sentence?: string
          source?: string
        }
        Relationships: []
      }
      hanyu_units: {
        Row: {
          book: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          book: string
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          book?: string
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_hanyu_units_book_fkey"
            columns: ["book"]
            isOneToOne: false
            referencedRelation: "hanyu_books"
            referencedColumns: ["name"]
          }
        ]
      }
      hanyu_words: {
        Row: {
          audio: string
          created_at: string
          english: string
          hanzi: string
          id: string
          pinyin: string
          source: string
        }
        Insert: {
          audio: string
          created_at?: string
          english: string
          hanzi: string
          id?: string
          pinyin: string
          source: string
        }
        Update: {
          audio?: string
          created_at?: string
          english?: string
          hanzi?: string
          id?: string
          pinyin?: string
          source?: string
        }
        Relationships: []
      }
      hanyu_writings: {
        Row: {
          created_at: string
          hanzi: string[]
          id: string
          source: string
        }
        Insert: {
          created_at?: string
          hanzi: string[]
          id?: string
          source: string
        }
        Update: {
          created_at?: string
          hanzi?: string[]
          id?: string
          source?: string
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
      right_explanation: {
        Row: {
          answer: string
          choices: string[]
          created_at: string
          id: string
          question: string
          sentence: string
          source: string
        }
        Insert: {
          answer: string
          choices: string[]
          created_at?: string
          id?: string
          question: string
          sentence: string
          source: string
        }
        Update: {
          answer?: string
          choices?: string[]
          created_at?: string
          id?: string
          question?: string
          sentence?: string
          source?: string
        }
        Relationships: []
      }
      translation: {
        Row: {
          english: string | null
          id: string
          zi: string
        }
        Insert: {
          english?: string | null
          id?: string
          zi: string
        }
        Update: {
          english?: string | null
          id?: string
          zi?: string
        }
        Relationships: []
      }
      zidian: {
        Row: {
          explanation: string | null
          id: string
          word: string | null
        }
        Insert: {
          explanation?: string | null
          id?: string
          word?: string | null
        }
        Update: {
          explanation?: string | null
          id?: string
          word?: string | null
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
