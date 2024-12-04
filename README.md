# openapi の機能理解

## 環境構築

### 型生成

1. [OpenAPI TypeScript](https://openapi-ts.dev/)
2. tsconfig.json の設定
3. コマンドを package.json に下記コマンドを登録する
4. [type-gen] を実行する

```json
"type-gen": "npx openapi-typescript ./lib/openapi/schema.yaml -o ./lib/type.ts"
```

### 擬似エンドポイントを作成する

1. [mswjs](https://mswjs.io/docs/getting-started)

## 運用に関して

- yaml に変更があった場合

  - その都度、手作業で更新する
  - package を出す。git の組織ないで有効なパッケージを配る。

  ```package.json
  "devDependencies": {
    "@hoge/app-schema":"^1"

  },
  ```

  - 直接スキーマを呼ぶ。社内からアクセスできるエンドポイントにスキーマをおく

  ```package.json
  "scripts": {
    "type-gen": "npx openapi-typescript http://xxx.schema -o ./lib/type.ts"
  },
  ```

  - モノリポ化する ※理想　※ターボリポとか
