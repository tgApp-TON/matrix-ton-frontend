import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Simulate Telegram WebApp data
  const mockTelegramData = {
    id: 999777888,
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    language_code: "en",
    is_premium: true
  };

  const registrationPayload = {
    telegramId: mockTelegramData.id.toString(),
    username: mockTelegramData.username,
    nickname: "TestUser" + Date.now(),
    referralCode: "MASTER",
    country: "United States",
    firstName: mockTelegramData.first_name,
    lastName: mockTelegramData.last_name,
    languageCode: mockTelegramData.language_code,
    phoneNumber: null,
    isPremium: mockTelegramData.is_premium
  };

  return NextResponse.json({
    message: "This is the data that will be sent to registration API",
    payload: registrationPayload,
    metadata: {
      firstName: mockTelegramData.first_name,
      lastName: mockTelegramData.last_name,
      languageCode: mockTelegramData.language_code,
      phoneNumber: null,
      country: "United States",
      registeredAt: new Date().toISOString(),
      registeredFrom: "web_app"
    }
  });
}
