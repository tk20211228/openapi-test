// const AppSchema =

import type { components } from "@/lib/type";
import { z } from "zod";

type app = components["schemas"]["Application"];

const AppSchema = z.object({
  // title: z.number(), // 型を間違えるとエラーが発生する
  title: z.string(),
  // Id: z.string(), // 存在しない型 は基本渡さない。
}) satisfies z.ZodType<app>; // app との型一致が担保される。

export default function AppInfo(app: components["schemas"]["Application"]) {
  return (
    <div>
      <h1>{app.title}</h1>
      <p>
        アプリの作成者: <strong></strong>
      </p>
    </div>
  );
}
