export interface MessageCountList {
  count?: string;
  timeBucket?: string;
  channelId?: string;
};

export interface Channels {
  label?: string;
  value: string;
  type?: number;
  guild?: string;
  guildId?: string;
  parentId?: string | null;
  permissionOverwrites?: string[];
  messages?: string[];
  threads?: string[];
  nsfw?: boolean;
  id: string;
  name: string;
  rawPosition?: number;
  topic?:string| null;
  lastMessageId?: string|null;
  rateLimitPerUser?: number;
  createdTimestamp?: number;
};
