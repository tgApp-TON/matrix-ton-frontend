import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// Найти или создать пользователя
export async function findOrCreateUser(telegramId: number, userData: {
  username?: string;
  firstName?: string;
  isPremium?: boolean;
}) {
  let user = await prisma.user.findUnique({
    where: { telegramId: BigInt(telegramId) },
    include: {
      tables: true,
      userStats: true
    }
  });

  if (!user) {
    // Создать нового пользователя
    user = await prisma.user.create({
      data: {
        telegramId: BigInt(telegramId),
        telegramUsername: userData.username,
        isPremium: userData.isPremium || false,
        accountCreatedDate: new Date(),
        nickname: `user_${telegramId}`,
        tonWallet: '', // Будет добавлен позже через TON Connect
        role: 'USER',
        payoutMethod: 'BATCH',
        referralCode: generateReferralCode(telegramId),
        userStats: {
          create: {}
        }
      },
      include: {
        tables: true,
        userStats: true
      }
    });
    
    console.log(`✅ Новый пользователь создан: ${telegramId}`);
  }

  return user;
}

// Генерация реферального кода
function generateReferralCode(telegramId: number): string {
  return `REF${telegramId}`;
}

// Получить данные пользователя
export async function getUserData(telegramId: number) {
  return await prisma.user.findUnique({
    where: { telegramId: BigInt(telegramId) },
    include: {
      tables: {
        orderBy: { tableNumber: 'asc' }
      },
      userStats: true,
      referrals: {
        select: {
          id: true,
          telegramUsername: true,
          registeredAt: true
        }
      }
    }
  });
}
