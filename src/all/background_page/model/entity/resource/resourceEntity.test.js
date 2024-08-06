/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) Passbolt SA (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since         2.13.0
 */
import ResourceEntity from "./resourceEntity";
import EntitySchema from "passbolt-styleguide/src/shared/models/entity/abstract/entitySchema";
import EntityValidationError from "passbolt-styleguide/src/shared/models/entity/abstract/entityValidationError";
import {defaultUserDto} from "passbolt-styleguide/src/shared/models/entity/user/userEntity.test.data";
import * as assertEntityProperty from "passbolt-styleguide/test/assert/assertEntityProperty";
import {defaultResourceDto} from "passbolt-styleguide/src/shared/models/entity/resource/resourceEntity.test.data";

describe("Resource entity", () => {
  describe("UserEntity::getSchema", () => {
    it("schema must validate", () => {
      EntitySchema.validateSchema(ResourceEntity.ENTITY_NAME, ResourceEntity.getSchema());
    });

    it("validates id property", () => {
      assertEntityProperty.string(ResourceEntity, "id");
      assertEntityProperty.uuid(ResourceEntity, "id");
      assertEntityProperty.notRequired(ResourceEntity, "id");
    });

    it("validates name property", () => {
      assertEntityProperty.string(ResourceEntity, "name");
      assertEntityProperty.maxLength(ResourceEntity, "name", 255);
      assertEntityProperty.required(ResourceEntity, "name");
    });

    it("validates username property", () => {
      assertEntityProperty.string(ResourceEntity, "username");
      assertEntityProperty.maxLength(ResourceEntity, "username", 255);
      assertEntityProperty.nullable(ResourceEntity, "username");
      assertEntityProperty.notRequired(ResourceEntity, "username");
    });

    it("validates uri property", () => {
      assertEntityProperty.string(ResourceEntity, "uri");
      assertEntityProperty.maxLength(ResourceEntity, "uri", 1024);
      assertEntityProperty.nullable(ResourceEntity, "uri");
      assertEntityProperty.notRequired(ResourceEntity, "uri");
    });

    it("validates description property", () => {
      assertEntityProperty.string(ResourceEntity, "description");
      assertEntityProperty.maxLength(ResourceEntity, "description", 10_000);
      assertEntityProperty.nullable(ResourceEntity, "description");
      assertEntityProperty.notRequired(ResourceEntity, "description");
    });

    it("validates expired property", () => {
      assertEntityProperty.dateTime(ResourceEntity, "expired");
      assertEntityProperty.nullable(ResourceEntity, "expired");
      assertEntityProperty.notRequired(ResourceEntity, "expired");
    });

    it("validates deleted property", () => {
      assertEntityProperty.boolean(ResourceEntity, "deleted");
      assertEntityProperty.notRequired(ResourceEntity, "deleted");
    });

    it("validates created property", () => {
      assertEntityProperty.string(ResourceEntity, "created");
      assertEntityProperty.dateTime(ResourceEntity, "created");
      assertEntityProperty.notRequired(ResourceEntity, "created");
    });

    it("validates modified property", () => {
      assertEntityProperty.string(ResourceEntity, "modified");
      assertEntityProperty.dateTime(ResourceEntity, "modified");
      assertEntityProperty.notRequired(ResourceEntity, "modified");
    });

    it("validates created_by property", () => {
      assertEntityProperty.uuid(ResourceEntity, "created_by");
      assertEntityProperty.notRequired(ResourceEntity, "created_by");
    });

    it("validates modified_by property", () => {
      assertEntityProperty.uuid(ResourceEntity, "modified_by");
      assertEntityProperty.notRequired(ResourceEntity, "modified_by");
    });

    it("validates folder_parent_id property", () => {
      assertEntityProperty.uuid(ResourceEntity, "folder_parent_id");
      assertEntityProperty.nullable(ResourceEntity, "folder_parent_id");
      assertEntityProperty.notRequired(ResourceEntity, "folder_parent_id");
    });

    it("validates resource_type_id property", () => {
      assertEntityProperty.string(ResourceEntity, "resource_type_id");
      assertEntityProperty.uuid(ResourceEntity, "resource_type_id");
      assertEntityProperty.notRequired(ResourceEntity, "resource_type_id");
    });

    it("validates personal property", () => {
      assertEntityProperty.boolean(ResourceEntity, "personal");
      assertEntityProperty.notRequired(ResourceEntity, "personal");
      assertEntityProperty.nullable(ResourceEntity, "personal");
    });
    
  });

  it("constructor works if valid DTO is provided", () => {
    const creator = defaultUserDto();
    const modifier = defaultUserDto();
    const dto = {
      "id": "10801423-4151-42a4-99d1-86e66145a08c",
      "name": "test",
      "username": "test@passbolt.com",
      "uri": "https://www.passbolt.com",
      "description": "Check check one two",
      "deleted": false,
      "created": "2020-05-04T20:31:45+00:00",
      "modified": "2020-05-04T20:31:45+00:00",
      "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
      "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
      "favorite": {
        "id": "45ce85c9-e301-4de2-8b41-298507002861",
        "user_id": "d57c10f5-633d-5160-9c81-8a0c6c4ec856",
        "foreign_key": "10801423-4151-42a4-99d1-86e66145a08c",
        "foreign_model": "Resource",
        "created": "2020-05-06T21:59:24+00:00",
        "modified": "2020-05-06T21:59:24+00:00"
      },
      "secrets": [{
        "id": "0dcde494-2231-43da-9bc5-6b39654b2a32",
        "user_id": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "resource_id": "10801423-4151-42a4-99d1-86e66145a08c",
        "data": "-----BEGIN PGP MESSAGE-----\n\nwcFMAxYTR81eetNbAQ\/\/TEWCA7W1kx7IzcZi4nmT92IZbdpzCBSQt5htSCoJ\nFfzGd27yeDT2GoEtmxmkG+gEak8ci0Jxa9FECaYDBzG4ixEDfDMfWqw\/WK2w\nj04oja+0qCAimV2nyItSYoaK5aZj8vL97V6U\/7YcraC9QTNY1Kd8RDPeL32D\nO2dpquPDLx5uMAmMoSZWruNCGqqJPjxMcxc2PBco+GJMcaGcYa5Y3+YueNpZ\nIIS0PbMpgiJlVvYzZywYC5lkIKFadVeV6MNkMmJfWB4VHq2Hoo3poZVP1rZV\n6cU7a7UuG4W3UUmezxQGQ6WAjh+qzkQHXrwI3cgU14du9sTCh8occwcPhG1C\nj8ljcTJqexQxA91TSj2UqhAnyB9yzZRcoh38bj\/OyGQmtiwxEFIzUymSi2pt\nysjJOZ7lB1Oh2l4vbgxJoNxtgvzY+3dsNXL510x793Hev3X2YcbO\/TJoy6G9\n89cuocJ1dlLIHqrfri43y1V0ZTfoa\/vigma4Qa5kUtB1tN0j38z+6tcjiz\/s\n8RJmXUK2bfHhvEbuc\/YnDDltpiZHc3QUtbj5TV2m+fO0ad2jVqxsi4eZid\/V\n\/WDUrAxRzY7xNRTRQQDbnT831NZeZbYobCpfPqU8ylF9iv\/V4lsyNYFrU0ne\n37JRFzl3cOY+jlqxGHaAF9\/mC3b3D3DmlZ+kOOQ7lE\/SwaoBAuDaJRsKzNqj\nTz8UFif5iwrEQY5BNzYd+zwGVzMlVP\/RNXR2YlAHx5lPMylgI73RDMoMZ4RT\nb7AQB9DqgobZI3dh3B90XqjkRiy3VJ\/nMhwknaZc6onJQgl2O\/ULie9kh69U\n1ojIkN+SHFCl42T1iT2eN08QUPffDVTMvT103WlX+MW8FV6CmF+TcDRUexs3\nT\/2EvFlxP6QTG41vLk4Sm3xce7rEZHiJ9hRrF26xVfT5jM+7z149lP5J8mgA\nARSBj2jlO7P1afQX+5RyYR+guD9LN95qMsNJwukTCzIo1AhE7yywf7b8v3a6\nXyanZo+TbDqxnJlozEMsdyGBwBn7UX6Erv072cZadO\/ZG2RBkbgiBGZ5hAjg\nPqwRAkfzDNa4WhsE9Crqs5ROy6IsDBGuAa8\/as0oCzIV+Ou4BPzKHfQDQS6U\nT0R+48sVAZAYY7TqaNHvf+3nlqMyssaK0SPm2fg3DZXPM2pcDatCFb4gVElC\n1qbG8pRIBmS\/NYr8m7IBnazDs9L6lYAjybuHes6cPqasDmHKha6DKl1P6jX+\nEeDxA0AVL4rZdUCt1fpEcFR\/R\/o4uDDLO8NGiHwM3MnbNI8G0SQy8q\/NhI11\nzWXyDeAR6hHKYC4h6WCCTFxe364PWLjQ5PGOLeAfeWEPCDZmP6U99kwoiOUu\ni8UuoIAFon3lIOXZnJ3ZtAcQ5UJ3gNcJH1EImZFdYtRgLo3GOPjBcNqGbmCu\n4xo+yMGy9Y8YJZM9HakKAChmHf01J3DAwNfUm8Rhx5w+NBQRm0aJ319wsACH\nlLEYvv+bVfPkNTvW\/vWND9eOPGI0Q8o=\n=AOt0\n-----END PGP MESSAGE-----\n",
        "created": "2020-05-04T20:31:45+00:00",
        "modified": "2020-05-04T20:31:45+00:00"
      }],
      "permission": {
        "id": "d4c0e643-3967-443b-93b3-102d902c4510",
        "aco": "Resource",
        "aco_foreign_key": "10801423-4151-42a4-99d1-86e66145a08c",
        "aro": "User",
        "aro_foreign_key": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "type": 15,
        "created": "2020-05-04T20:31:45+00:00",
        "modified": "2020-05-04T20:31:45+00:00"
      },
      "folder_parent_id": "e2172205-139c-4e4b-a03a-933528123fff",
      "creator": creator,
      "modifier": modifier,
    };
    const entity = new ResourceEntity(dto);
    expect(entity.toDto()).toEqual({
      "id": "10801423-4151-42a4-99d1-86e66145a08c",
      "name": "test",
      "username": "test@passbolt.com",
      "uri": "https://www.passbolt.com",
      "description": "Check check one two",
      "deleted": false,
      "created": "2020-05-04T20:31:45+00:00",
      "modified": "2020-05-04T20:31:45+00:00",
      "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
      "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
      "folder_parent_id": "e2172205-139c-4e4b-a03a-933528123fff",
      "creator": creator,
      "modifier": modifier,
    });
    const contain = {secrets: true, permissions: true, permission: true, tags: true, favorite: true, creator: true, modifier: true};
    expect(entity.toDto(contain)).toEqual({
      "id": "10801423-4151-42a4-99d1-86e66145a08c",
      "name": "test",
      "username": "test@passbolt.com",
      "uri": "https://www.passbolt.com",
      "description": "Check check one two",
      "deleted": false,
      "created": "2020-05-04T20:31:45+00:00",
      "modified": "2020-05-04T20:31:45+00:00",
      "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
      "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
      "favorite": {
        "id": "45ce85c9-e301-4de2-8b41-298507002861",
        "user_id": "d57c10f5-633d-5160-9c81-8a0c6c4ec856",
        "foreign_key": "10801423-4151-42a4-99d1-86e66145a08c",
        // "foreign_model": "Resource",
        "created": "2020-05-06T21:59:24+00:00",
        // "modified": "2020-05-06T21:59:24+00:00"
      },
      "secrets": [{
        "id": "0dcde494-2231-43da-9bc5-6b39654b2a32",
        "user_id": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "resource_id": "10801423-4151-42a4-99d1-86e66145a08c",
        "data": "-----BEGIN PGP MESSAGE-----\n\nwcFMAxYTR81eetNbAQ\/\/TEWCA7W1kx7IzcZi4nmT92IZbdpzCBSQt5htSCoJ\nFfzGd27yeDT2GoEtmxmkG+gEak8ci0Jxa9FECaYDBzG4ixEDfDMfWqw\/WK2w\nj04oja+0qCAimV2nyItSYoaK5aZj8vL97V6U\/7YcraC9QTNY1Kd8RDPeL32D\nO2dpquPDLx5uMAmMoSZWruNCGqqJPjxMcxc2PBco+GJMcaGcYa5Y3+YueNpZ\nIIS0PbMpgiJlVvYzZywYC5lkIKFadVeV6MNkMmJfWB4VHq2Hoo3poZVP1rZV\n6cU7a7UuG4W3UUmezxQGQ6WAjh+qzkQHXrwI3cgU14du9sTCh8occwcPhG1C\nj8ljcTJqexQxA91TSj2UqhAnyB9yzZRcoh38bj\/OyGQmtiwxEFIzUymSi2pt\nysjJOZ7lB1Oh2l4vbgxJoNxtgvzY+3dsNXL510x793Hev3X2YcbO\/TJoy6G9\n89cuocJ1dlLIHqrfri43y1V0ZTfoa\/vigma4Qa5kUtB1tN0j38z+6tcjiz\/s\n8RJmXUK2bfHhvEbuc\/YnDDltpiZHc3QUtbj5TV2m+fO0ad2jVqxsi4eZid\/V\n\/WDUrAxRzY7xNRTRQQDbnT831NZeZbYobCpfPqU8ylF9iv\/V4lsyNYFrU0ne\n37JRFzl3cOY+jlqxGHaAF9\/mC3b3D3DmlZ+kOOQ7lE\/SwaoBAuDaJRsKzNqj\nTz8UFif5iwrEQY5BNzYd+zwGVzMlVP\/RNXR2YlAHx5lPMylgI73RDMoMZ4RT\nb7AQB9DqgobZI3dh3B90XqjkRiy3VJ\/nMhwknaZc6onJQgl2O\/ULie9kh69U\n1ojIkN+SHFCl42T1iT2eN08QUPffDVTMvT103WlX+MW8FV6CmF+TcDRUexs3\nT\/2EvFlxP6QTG41vLk4Sm3xce7rEZHiJ9hRrF26xVfT5jM+7z149lP5J8mgA\nARSBj2jlO7P1afQX+5RyYR+guD9LN95qMsNJwukTCzIo1AhE7yywf7b8v3a6\nXyanZo+TbDqxnJlozEMsdyGBwBn7UX6Erv072cZadO\/ZG2RBkbgiBGZ5hAjg\nPqwRAkfzDNa4WhsE9Crqs5ROy6IsDBGuAa8\/as0oCzIV+Ou4BPzKHfQDQS6U\nT0R+48sVAZAYY7TqaNHvf+3nlqMyssaK0SPm2fg3DZXPM2pcDatCFb4gVElC\n1qbG8pRIBmS\/NYr8m7IBnazDs9L6lYAjybuHes6cPqasDmHKha6DKl1P6jX+\nEeDxA0AVL4rZdUCt1fpEcFR\/R\/o4uDDLO8NGiHwM3MnbNI8G0SQy8q\/NhI11\nzWXyDeAR6hHKYC4h6WCCTFxe364PWLjQ5PGOLeAfeWEPCDZmP6U99kwoiOUu\ni8UuoIAFon3lIOXZnJ3ZtAcQ5UJ3gNcJH1EImZFdYtRgLo3GOPjBcNqGbmCu\n4xo+yMGy9Y8YJZM9HakKAChmHf01J3DAwNfUm8Rhx5w+NBQRm0aJ319wsACH\nlLEYvv+bVfPkNTvW\/vWND9eOPGI0Q8o=\n=AOt0\n-----END PGP MESSAGE-----\n",
        "created": "2020-05-04T20:31:45+00:00",
        "modified": "2020-05-04T20:31:45+00:00"
      }],
      "permission": {
        "id": "d4c0e643-3967-443b-93b3-102d902c4510",
        "aco": "Resource",
        "aco_foreign_key": "10801423-4151-42a4-99d1-86e66145a08c",
        "aro": "User",
        "aro_foreign_key": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "type": 15,
        "created": "2020-05-04T20:31:45+00:00",
        "modified": "2020-05-04T20:31:45+00:00"
      },
      "folder_parent_id": "e2172205-139c-4e4b-a03a-933528123fff",
      "creator": creator,
      "modifier": modifier,
    });
  });

  it("constructor returns validation error if dto required fields are missing", () => {
    try {
      new ResourceEntity({});
    } catch (error) {
      expect(error instanceof EntityValidationError).toBe(true);
      expect(error.details).toEqual({
        name: {required: 'The name is required.'},
      });
    }
  });

  describe("ResourceEntity::transformDtoFromV4toV5", () => {
    it("Should transform DTO by including V5 format", () => {
      expect.assertions(6)

      const entity = new ResourceEntity(defaultResourceDto()).toDto()
      const entityV5 = ResourceEntity.transformDtoFromV4toV5(entity);

      // V4 root format
      expect(entityV5.name).toEqual(entity.name)
      expect(entityV5.description).toEqual(entity.description)
      expect(entityV5.username).toEqual(entity.username)
      expect(entityV5.uri).toEqual(entity.uri)
      expect(entityV5.resource_type_id).toEqual(entity.resource_type_id)
      // V5 metata data object
      expect(entityV5.metadata).toEqual({
        object_type: "PASSBOLT_METADATA_V5",
        resource_type_id: entity.resourceTypeId,
        name: entity.name,
        username: entity.username,
        uris: [entity.uri],
        description: entity.description
      })
    })
  })
});

