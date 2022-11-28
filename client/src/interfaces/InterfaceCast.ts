export interface ICast {
    id: number | null;
    cast:
        | {
              adult: boolean | null;
              gender: number | null;
              id: number | null;
              known_for_department: string | null;
              name: string | null;
              original_name: string | null;
              popularity: number | null;
              profile_path: string | null;
              cast_id: number | null;
              character: string | null;
              credit_id: string | null;
              order: number | null;
          }[]
        | null;
    success: boolean | null;
    status_code: number | null;
    status_message: string | null;
}
