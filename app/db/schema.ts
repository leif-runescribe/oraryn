import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, numeric } from 'drizzle-orm/sqlite-core';

// Users Table
export const usersTable = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  walletAddress: text('wallet_address').notNull(),
});

// Creators Table
export const creatorsTable = sqliteTable('creators', {
  id: integer('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  bio: text('bio'), // No need for nullable(), as it is nullable by default
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

// Subscriptions Table
export const subscriptionsTable = sqliteTable('subscriptions', {
  id: integer('id').primaryKey(),
  creatorId: integer('creator_id')
    .notNull()
    .references(() => creatorsTable.id, { onDelete: 'cascade' }),
  tierName: text('tier_name').notNull(),
  description: text('description'), // No need for nullable()
  priceInUSD: numeric('price_in_usd').notNull(),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

// Subscribers Table
export const subscribersTable = sqliteTable('subscribers', {
  id: integer('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  subscriptionId: integer('subscription_id')
    .notNull()
    .references(() => subscriptionsTable.id, { onDelete: 'cascade' }),
  amountPaid: numeric('amount_paid').notNull(),
  paymentToken: text('payment_token').notNull(),
  subscribedAt: text('subscribed_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

// Define TypeScript Types for Insert and Select Operations
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertCreator = typeof creatorsTable.$inferInsert;
export type SelectCreator = typeof creatorsTable.$inferSelect;

export type InsertSubscription = typeof subscriptionsTable.$inferInsert;
export type SelectSubscription = typeof subscriptionsTable.$inferSelect;

export type InsertSubscriber = typeof subscribersTable.$inferInsert;
export type SelectSubscriber = typeof subscribersTable.$inferSelect;
