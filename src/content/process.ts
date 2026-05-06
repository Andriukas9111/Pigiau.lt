export type ProcessStep = {
  index: number;
  i18nKey: "assess" | "prep" | "wash" | "finish";
};

export const processSteps: ProcessStep[] = [
  { index: 1, i18nKey: "assess" },
  { index: 2, i18nKey: "prep" },
  { index: 3, i18nKey: "wash" },
  { index: 4, i18nKey: "finish" },
];
