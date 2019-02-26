import { CachedCollection } from 'meteor/rocketchat:ui-cached-collection';

export const AuthzCachedCollection = new CachedCollection({
	name: 'permissions',
	eventType: 'onLogged',
});

export const ChatPermissions = AuthzCachedCollection.collection;
