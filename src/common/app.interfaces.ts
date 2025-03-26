export interface CacheManagerOptions {
  store?: string; // | CacheStoreFactory | CacheStore;
  ttl?: number;
  max?: number;
  isCacheableValue?: (value: any) => boolean;
}
