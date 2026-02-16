## ADDED Requirements

### Requirement: User can enter comma-separated list
The system SHALL allow users to enter a list of items separated by commas in a text input field.

#### Scenario: User enters valid list
- **WHEN** user enters "Item A, Item B, Item C" in the text box and clicks submit
- **THEN** the system parses the input into ["Item A", "Item B", "Item C"]

#### Scenario: User enters single item
- **WHEN** user enters "Only One Item" and clicks submit
- **THEN** the system shows an error message requiring at least 2 items

#### Scenario: User enters empty string
- **WHEN** user enters an empty string and clicks submit
- **THEN** the system shows an error message requiring at least 2 items

#### Scenario: User enters items with extra whitespace
- **WHEN** user enters "Item A , Item B , Item C" (with spaces around commas) and clicks submit
- **THEN** the system trims whitespace and parses as ["Item A", "Item B", "Item C"]

### Requirement: System generates comparison pairs
The system SHALL generate all possible comparison pairs from the input list and randomize their order.

#### Scenario: Generate pairs from 3 items
- **WHEN** user enters "A, B, C" and clicks submit
- **THEN** the system generates pairs: [[A,B], [A,C], [B,C]] in randomized order

#### Scenario: Generate pairs from 4 items
- **WHEN** user enters "A, B, C, D" and clicks submit
- **THEN** the system generates 6 pairs (n*(n-1)/2 = 4*3/2 = 6)

### Requirement: System displays comparison interface
After submitting a valid list, the system SHALL display the comparison interface with the first pair.

#### Scenario: Start comparison after valid input
- **WHEN** user enters "A, B" and clicks submit
- **THEN** the comparison view displays with "A" and "B" as the first pair

#### Scenario: Complete all comparisons
- **WHEN** user has completed all comparison pairs
- **THEN** the system displays sorted results with all items ranked by preference score
