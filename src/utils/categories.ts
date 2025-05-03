import { MaterialIcons } from "@expo/vector-icons";

type Category = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  {
    id: "all",
    name: "Todos",
    icon: "apps",
  },
  {
    id: "1",
    name: "Curso",
    icon: "school",
  },
  {
    id: "2",
    name: "Projeto",
    icon: "code",
  },
  {
    id: "3",
    name: "Sites",
    icon: "web",
  },
  {
    id: "4",
    name: "Artigo",
    icon: "newspaper",
  },
  {
    id: "5",
    name: "Vídeo",
    icon: "movie",
  },
  {
    id: "6",
    name: "Documentação",
    icon: "content-paste",
  },
]