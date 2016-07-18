/* @flow */

import assert from 'power-assert';

import { buildSOQL } from '../src';

describe('soql-builder', () => {
  it('should generate valid soql string', () => {
    const query = {
      fields: ["Id", "Name", "Account.Id", "Account.Name"],
      table: "Opportunity",
      condition: {
        operator: "AND",
        conditions: [{
          operator: "NOT",
          condition: {
            field: "Account.Name",
            operator : "LIKE",
            value : "%a%",
          },
        }, {
          field: "Amount",
          operator: ">=",
          value: 5000,
        }, {
          field: "Type",
          operator: "!=",
          value: null
        }, {
          field: "StageName",
          operator: "IN",
          value: [ "Prospecting", "Value Proposition", "Qualification" ],
        }, {
          operator: "OR",
          conditions: [{
            field: "Account.Owner.Username",
            operator: "!=",
            value: "user01@example.com",
          }, {
            field: "Account.Owner.IsActive",
            operator: "=",
            value: false,
          }, {
            operator: "AND",
            conditions: [{
              field: "CloseDate",
              operator: ">=",
              value: {
                type: "date",
                value: "2008-01-01",
              },
            }, {
              field: "CloseDate",
              operator: "<",
              value: {
                type: "date",
                value: "TODAY"
              }
            }]
          }],
        }],
      },
      sortInfo: [{
        field: "Account.Type",
        direction: "ASC",
        nullOrder: "LAST",
      }, {
        field: "Amount",
        direction: "DESC",
      }],
      limit: 1000,
    };

    const expectedSOQL =
      'SELECT Id, Name, Account.Id, Account.Name ' +
      'FROM Opportunity ' +
      'WHERE ' +
      '(NOT Account.Name LIKE \'%a%\') ' +
      'AND ' +
      'Amount >= 5000 ' +
      'AND ' +
      'Type != null ' +
      'AND ' +
      'StageName IN (\'Prospecting\', \'Value Proposition\', \'Qualification\') ' +
      'AND ' +
      '(' +
        'Account.Owner.Username != \'user01@example.com\' ' +
        'OR ' +
        'Account.Owner.IsActive = false ' +
        'OR ' +
        '(CloseDate >= 2008-01-01 AND CloseDate < TODAY)' +
      ') ' +
      'ORDER BY Account.Type ASC NULLS LAST, Amount DESC ' +
      'LIMIT 1000';

    const soql = buildSOQL(query);
    assert(soql === expectedSOQL);

  });
});
