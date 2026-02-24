Trello API: https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-id-get

### Search for a Card
```
curl --request GET \
  --url 'https://api.trello.com/1/search?query={searchTerm}&key=API_KEY&token=TOKEN' \
  --header 'Accept: application/json'
```

### Search for a List
- Easiest is to search for a card on the list, then grab the list id from the output
- Then you can use the id to find a little more info: 

```
curl --request GET \
  --url 'https://api.trello.com/1/lists/{625468b38314cd5951d7f46b}?key=KEY&token=TOKEN'
```

### Search for Cards in a List
- Lighter Ideas List id: `625468b38314cd5951d7f46b`

```
curl --request GET \
  --url 'https://api.trello.com/1/lists/{625468b38314cd5951d7f46b}/cards?key=KEY&token=TOKEN'
```

*****
Response is an array of type Card: 

# Card

Details

Example

**id**

string

Pattern: `^[0-9a-fA-F]{24}$`

**address**

string

Nullable: `true`

**badges**

object

**checkItemStates**

Array<string>

**closed**

boolean

**coordinates**

string

Nullable: `true`

**creationMethod**

string

Nullable: `true`

**dateLastActivity**

string

Format: `date-time`

**desc**

string

**descData**

object

**due**

string

Nullable: `true`, Format: `date`

**dueReminder**

string

Nullable: `true`

**email**

string

Format: `email`

**idBoard**

string

Pattern: `^[0-9a-fA-F]{24}$`

**idChecklists**

Array<oneOf [Checklist, string]>

**idLabels**

Array<oneOf [Label, string]>

**idList**

string

Pattern: `^[0-9a-fA-F]{24}$`

**idMembers**

Array<string>

**idMembersVoted**

Array<string>

**idShort**

integer

**idAttachmentCover**

string

Pattern: `^[0-9a-fA-F]{24}$`

**labels**

Array<string>

**limits**

Limits

**locationName**

string

Nullable: `true`

**manualCoverAttachment**

boolean

**name**

string

**pos**

number

Format: `float`

**shortLink**

string

**shortUrl**

string

Format: `url`

**subscribed**

boolean

**url**

string

Format: `url`

**cover**

object

