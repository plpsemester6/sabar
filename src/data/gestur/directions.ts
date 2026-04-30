export type GestureDirectionId =
  | "right"
  | "left"
  | "up"
  | "down"
  | "front"
  | "back"
  | "inside"
  | "outside";

export type DirectionData = {
  id: GestureDirectionId;
  arabic: string;
  latin: string;
  meaning: string;
  commandLabel: string;
  gesture: string;
  hint: string;
  emoji: string;
};

export const directions: DirectionData[] = [
  {
    id: "right",
    arabic: "يَمِين",
    latin: "yamīn",
    meaning: "Kanan",
    commandLabel: "RIGHT",
    gesture: "Pose jempol mengarah ke kanan, tahan ±0,65 detik",
    hint: "Zayd bergerak ke sisi kanan ruang belajar.",
    emoji: "➡️"
  },
  {
    id: "left",
    arabic: "يَسَار",
    latin: "yasār",
    meaning: "Kiri",
    commandLabel: "LEFT",
    gesture: "Pose jempol mengarah ke kiri, tahan ±0,65 detik",
    hint: "Zayd bergerak ke sisi kiri ruang belajar.",
    emoji: "⬅️"
  },
  {
    id: "up",
    arabic: "فَوْقَ",
    latin: "fawqa",
    meaning: "Atas",
    commandLabel: "UP",
    gesture: "Pose telunjuk mengarah ke atas, tahan ±0,65 detik",
    hint: "Zayd naik ke atas untuk mengenal arah atas.",
    emoji: "⬆️"
  },
  {
    id: "down",
    arabic: "تَحْتَ",
    latin: "taḥta",
    meaning: "Bawah",
    commandLabel: "DOWN",
    gesture: "Pose telunjuk mengarah ke bawah, tahan ±0,65 detik",
    hint: "Zayd turun ke bawah untuk mengenal arah bawah.",
    emoji: "⬇️"
  },
  {
    id: "front",
    arabic: "أَمَامَ",
    latin: "amāma",
    meaning: "Depan",
    commandLabel: "FRONT",
    gesture: "Pose telapak terbuka, tahan ±0,65 detik",
    hint: "Zayd maju ke depan ruang belajar.",
    emoji: "🫱"
  },
  {
    id: "back",
    arabic: "خَلْفَ",
    latin: "khalfa",
    meaning: "Belakang",
    commandLabel: "BACK",
    gesture: "Pose kepal tangan, tahan ±0,65 detik",
    hint: "Zayd bergerak ke belakang.",
    emoji: "↩️"
  },
  {
    id: "inside",
    arabic: "دَاخِلَ",
    latin: "dākhila",
    meaning: "Dalam",
    commandLabel: "INSIDE",
    gesture: "Dua tangan dekat di tengah, tahan ±0,65 detik",
    hint: "Zayd masuk ke rumah belajar.",
    emoji: "📦"
  },
  {
    id: "outside",
    arabic: "خَارِجَ",
    latin: "khārija",
    meaning: "Luar",
    commandLabel: "OUTSIDE",
    gesture: "Dua tangan terbuka melebar, tahan ±0,65 detik",
    hint: "Zayd keluar dari rumah belajar.",
    emoji: "🌤️"
  }
];

export function getDirectionById(id: GestureDirectionId): DirectionData {
  const direction = directions.find((item) => item.id === id);
  if (!direction) {
    throw new Error(`Direction not found: ${id}`);
  }
  return direction;
}
