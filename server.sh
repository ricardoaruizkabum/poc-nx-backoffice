#!/usr/bin/env bash

set -e

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

read -r -p "Deseja instalar as dependências antes de iniciar? (s/N) " INSTALL_DEPS
if [[ "$INSTALL_DEPS" =~ ^[sS]$ ]]; then
  echo "Instalando dependências..."
  npm i
fi

read -r -p "Deseja rodar o build antes de iniciar? (s/N) " RUN_BUILD
if [[ "$RUN_BUILD" =~ ^[sS]$ ]]; then
  echo "Rodando build..."
  npx nx run-many -t build --projects=shell,product,pc_builder,manager_cx
fi

echo "Starting product on port 4201..."
# nx run product:build
npx http-server "$ROOT_DIR/apps/product/dist" -p 4201 --cors -s &

echo "Starting pc_builder on port 4202..."
# nx run pc_builder:build
npx http-server "$ROOT_DIR/apps/pc_builder/dist" -p 4202 --cors -s &

echo "Starting manager_cx on port 4203..."
# nx run manager_cx:build
npx http-server "$ROOT_DIR/apps/manager_cx/dist" -p 4203 --cors -s &

echo "Starting shell on port 4200..."
# nx run shell:build
npx http-server "$ROOT_DIR/apps/shell/dist" -p 4200 --cors -s &

echo ""
echo "All apps running:"
echo "  shell      -> http://localhost:4200"
echo "  product    -> http://localhost:4201"
echo "  pc_builder -> http://localhost:4202"
echo "  manager_cx -> http://localhost:4203"

wait