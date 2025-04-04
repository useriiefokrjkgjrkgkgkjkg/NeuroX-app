# Деплой на Vercel

## Шаги для деплоя:

1. Перейдите на [Vercel](https://vercel.com) и войдите в свой аккаунт

2. Нажмите "New Project"

3. Импортируйте репозиторий `NeuroX-app` из GitHub

4. Настройте проект:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install

5. Добавьте переменные окружения:
   ```
   NEXT_PUBLIC_BOT_USERNAME=@neurox_bot
   NEXT_PUBLIC_APP_URL=https://neurox-vpn.vercel.app
   ```

6. Нажмите "Deploy"

7. После успешного деплоя, скопируйте URL вашего приложения

8. Обновите URL в файле `vercel.json` и в настройках бота

## Важные замечания:

- Убедитесь, что все зависимости указаны в `package.json`
- Проверьте, что все необходимые переменные окружения добавлены
- После деплоя проверьте работу приложения в Telegram

## Обновление приложения:

Для обновления приложения просто отправьте изменения в репозиторий GitHub. Vercel автоматически задеплоит новую версию. 