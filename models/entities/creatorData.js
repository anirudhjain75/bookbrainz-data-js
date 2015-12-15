/*
 * Copyright (C) 2015  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

'use strict';

const util = require('../util');
const _ = require('lodash');

module.exports = (bookshelf) => {
	const EntityData = bookshelf.model('EntityData');

	const CreatorData = bookshelf.Model.extend({
		tableName: 'bookbrainz.creator_data',
		idAttribute: 'id',
		parse: util.snakeToCamel,
		format: util.camelToSnake,
		entityData() {
			return this.morphOne(
				'EntityData', 'entity_data', ['_type', 'id'], '1'
			);
		}
	});

	return bookshelf.model('CreatorData', CreatorData);
};
