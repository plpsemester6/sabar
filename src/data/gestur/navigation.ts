import type { GestureDirectionId } from "./directions";

export type NavigationCommandId =
  | "walkForward"
  | "walkBackward"
  | "turnRight"
  | "turnLeft"
  | "goUp"
  | "goDown";

export type NavigationCommand = {
  id: NavigationCommandId;
  arabic: string;
  latin: string;
  meaning: string;
  commandLabel: string;
  gesture: string;
  hint: string;
  emoji: string;
  gestureSource: GestureDirectionId;
};

export const navigationCommands: NavigationCommand[] = [
  {
    id: "walkForward",
    arabic: "تَقَدَّمْ",
    latin: "taqaddam",
    meaning: "Maju",
    commandLabel: "FORWARD",
    gesture: "Pose telapak terbuka, tahan ±0,65 detik",
    hint: "Perintah berjalan maju lurus ke depan.",
    emoji: "🚶",
    gestureSource: "front"
  },
  {
    id: "walkBackward",
    arabic: "اِرْجِعْ",
    latin: "irji‘",
    meaning: "Mundur",
    commandLabel: "BACKWARD",
    gesture: "Pose kepal tangan, tahan ±0,65 detik",
    hint: "Perintah berjalan mundur.",
    emoji: "↩️",
    gestureSource: "back"
  },
  {
    id: "turnRight",
    arabic: "اِنْعَطِفْ يَمِينًا",
    latin: "in‘aṭif yamīnan",
    meaning: "Belok ke kanan",
    commandLabel: "TURN RIGHT",
    gesture: "Pose jempol mengarah ke kanan, tahan ±0,65 detik",
    hint: "Belok ke arah kanan lalu lanjutkan orientasi baru.",
    emoji: "↪️",
    gestureSource: "right"
  },
  {
    id: "turnLeft",
    arabic: "اِنْعَطِفْ يَسَارًا",
    latin: "in‘aṭif yasāran",
    meaning: "Belok ke kiri",
    commandLabel: "TURN LEFT",
    gesture: "Pose jempol mengarah ke kiri, tahan ±0,65 detik",
    hint: "Belok ke arah kiri lalu lanjutkan orientasi baru.",
    emoji: "↩️",
    gestureSource: "left"
  },
  {
    id: "goUp",
    arabic: "اِصْعَدْ",
    latin: "iṣ‘ad",
    meaning: "Naik",
    commandLabel: "UP",
    gesture: "Pose telunjuk mengarah ke atas, tahan ±0,65 detik",
    hint: "Perintah naik ke tangga atau elevasi yang lebih tinggi.",
    emoji: "🪜",
    gestureSource: "up"
  },
  {
    id: "goDown",
    arabic: "اِنْزِلْ",
    latin: "inzil",
    meaning: "Turun",
    commandLabel: "DOWN",
    gesture: "Pose telunjuk mengarah ke bawah, tahan ±0,65 detik",
    hint: "Perintah turun ke level yang lebih rendah.",
    emoji: "⬇️",
    gestureSource: "down"
  }
];

export function getNavigationById(id: NavigationCommandId): NavigationCommand {
  const item = navigationCommands.find((command) => command.id === id);
  if (!item) {
    throw new Error(`Navigation command not found: ${id}`);
  }
  return item;
}

export function mapGestureToNavigation(gesture: GestureDirectionId): NavigationCommandId | null {
  const item = navigationCommands.find((command) => command.gestureSource === gesture);
  return item?.id ?? null;
}
