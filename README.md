# soql-build [![Build Status](https://travis-ci.org/stomita/soql-build.svg?branch=master)](https://travis-ci.org/stomita/soql-build)

Securely build SOQL string from JSON-based query structure


### Example

```js
import { buildSOQL } from 'soql-build';

/**
 * Simple Query
 */
const soql1 = buildSOQL({
  fields: ['Id', 'Name', 'Account.Name'],
  table: 'Opportunity',
  condition: {
    operator: 'AND',
    conditions: [
      {
        field: 'Amount',
        operator: '>=',
        value: 5000,
      },
    ],
  },
});

console.log(soql1);
// => SELECT Id, Name, Account.Name FROM Opportunity WHERE Amount >= 5000

/**
 * Complex Condition / Order By / Limit / Offset
 */
const soql2 = buildSOQL({
  fields: ['Id', 'Name', 'Account.Name'],
  table: 'Opportunity',
  condition: {
    operator: 'AND',
    conditions: [
      {
        operator: 'NOT',
        condition: {
          field: 'Account.Name',
          operator: 'LIKE',
          value: '%a%',
        },
      },
      {
        field: 'Amount',
        operator: '>=',
        value: 5000,
      },
      {
        field: 'Type',
        operator: '!=',
        value: null,
      },
      {
        field: 'StageName',
        operator: 'IN',
        value: ['Prospecting', 'Value Proposition', 'Qualification'],
      },
      {
        operator: 'OR',
        conditions: [
          {
            field: 'Account.Owner.Username',
            operator: '!=',
            value: 'user01@example.com',
          },
          {
            field: 'Account.Owner.IsActive',
            operator: '=',
            value: false,
          },
          {
            operator: 'AND',
            conditions: [
              {
                field: 'CloseDate',
                operator: '>=',
                value: {
                  type: 'date',
                  value: '2008-01-01',
                },
              },
              {
                field: 'CloseDate',
                operator: '<',
                value: {
                  type: 'date',
                  value: 'TODAY',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  sortInfo: [
    {
      field: 'Account.Type',
      direction: 'ASC',
      nullOrder: 'LAST',
    },
    {
      field: 'Amount',
      direction: 'DESC',
    },
  ],
  limit: 1000,
  offset: 50,
});

console.log(soql2);
// => SELECT Id, Name, Account.Name FROM Opportunity WHERE (NOT Account.Name LIKE '%a%') AND Amount >= 5000 AND Type != null AND StageName IN ('Prospecting', 'Value Proposition', 'Qualification') AND (Account.Owner.Username != 'user01@example.com' OR Account.Owner.IsActive = false OR (CloseDate >= 2008-01-01 AND CloseDate < TODAY)) ORDER BY Account.Type ASC NULLS LAST, Amount DESC LIMIT 1000 OFFSET 50

/**
 * Function / Child Relationship
 */
const soql3 = buildSOQL({
  fields: [
    'Id',
    'Name',
    {
      type: 'function',
      function: 'CALENDAR_YEAR',
      arguments: ['CloseDate'],
    },
    {
      type: 'subquery',
      fields: [
        'Id',
        'Subject',
        {
          type: 'function',
          function: 'toLabel',
          arguments: ['Status'],
        },
      ],
      relationship: 'ActivityHistories',
      condition: {
        operator: '=',
        field: 'IsTask',
        value: true,
      },
      sortInfo: [
        {
          field: 'ActivityDate',
          direction: 'DESC',
        },
      ],
      limit: 5,
    },
  ],
  table: 'Opportunity',
});

console.log(soql3);
// => SELECT Id, Name, CALENDAR_YEAR(CloseDate), (SELECT Id, Subject, toLabel(Status) FROM ActivityHistories WHERE IsTask = true ORDER BY ActivityDate DESC LIMIT 5) FROM Opportunity

/**
 * Group By Query
 */
const soql4 = buildSOQL({
  fields: [
    {
      type: 'function',
      function: 'MAX',
      arguments: ['CreatedDate'],
    },
  ],
  table: 'Account',
  grouping: {
    fields: ['Type', 'Industry'],
    subtotal: 'ROLLUP',
    having: {
      field: {
        type: 'function',
        function: 'MAX',
        arguments: ['CreatedDate'],
      },
      operator: '<=',
      value: {
        type: 'date',
        value: 'LAST_YEAR',
      },
    },
  },
});

console.log(soql4);
// => SELECT MAX(CreatedDate) FROM Account GROUP BY ROLLUP (Type, Industry) HAVING MAX(CreatedDate) <= LAST_YEAR
```
