import { check } from 'meteor/check';
import _ from 'underscore';

import { BaseDb } from './_BaseDb';
import { oplogEvents } from '../oplogEvents';

export class Base {
	constructor(nameOrModel, options) {
		this._db = new BaseDb(nameOrModel, this, options);
		this.model = this._db.model;
		this.collectionName = this._db.collectionName;
		this.name = this._db.name;

		this.on = this._db.on.bind(this._db);
		this.emit = this._db.emit.bind(this._db);

        this.db = this;
        this._db.on('change', ({ action, oplog }) => {
			if (!oplog) {
				return;
			}
			oplogEvents.emit('record', {
				collection: this.collectionName,
				op: action,
			});
		});
	}

	get origin() {
		return '_db';
	}

	arrayToCursor(data) {
		return {
			fetch() {
				return data;
			},
			count() {
				return data.length;
			},
			forEach(fn) {
				return data.forEach(fn);
			},
		};
	}

	setUpdatedAt(...args) {
		return this._db.setUpdatedAt(...args);
	}

	find(...args) {
		try {
			return this[this.origin].find(...args);
		} catch (e) {
			console.error('Exception on find', e, ...args);
		}
	}

	findById(...args) {
		try {
			return this[this.origin].findById(...args);
		} catch (e) {
			console.error('Exception on find', e, ...args);
		}
	}

	findOne(...args) {
		try {
			return this[this.origin].findOne(...args);
		} catch (e) {
			console.error('Exception on find', e, ...args);
		}
	}

	findOneById(...args) {
		try {
			return this[this.origin].findOneById(...args);
		} catch (e) {
			console.error('Exception on find', e, ...args);
		}
	}

	findOneByIds(ids, options, ...args) {
		check(ids, [String]);

		try {
			return this[this.origin].findOneByIds(ids, options);
		} catch (e) {
			console.error('Exception on find', e, [ids, options, ...args]);
		}
	}

	insert(...args/* record*/) {
		return this._db.insert(...args);
	}

	update(...args/* query, update, options*/) {
		return this._db.update(...args);
	}

	upsert(...args/* query, update*/) {
		return this._db.upsert(...args);
	}

	remove(...args/* query*/) {
		return this._db.remove(...args);
	}

	insertOrUpsert(...args) {
		return this._db.insertOrUpsert(...args);
	}

	allow(...args) {
		return this._db.allow(...args);
	}

	deny(...args) {
		return this._db.deny(...args);
	}

	ensureIndex(...args) {
		return this._db.ensureIndex(...args);
	}

	dropIndex(...args) {
		return this._db.dropIndex(...args);
	}

	tryEnsureIndex(...args) {
		return this._db.tryEnsureIndex(...args);
	}

	tryDropIndex(...args) {
		return this._db.tryDropIndex(...args);
	}
}
