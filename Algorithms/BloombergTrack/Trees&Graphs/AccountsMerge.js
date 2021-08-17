/**
Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.



Example 1:

Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Example 2:

Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]


Constraints:

1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j] <= 30
accounts[i][0] consists of English letters.
accounts[i][j] (for j > 0) is a valid email.
Accepted
**/

/**
keep track of emails we've seen before
keep track of partitioning of account
union-find (non-overlapping sets)

accounts = [
  ["John", "joe-a@m.com", "johna@m.com"],
  ["John", "a_joe@m.com"],
  ["John", "joe_b@m.com", "joe-b@m.com", "b_joe@m.com"],
  ["John", "a_joe@m.com", "joe-a@m.com"],
  ["Mary", "mary@m.com"]
]

// keep track of emails we've seen before
// key is value of email, value is index of user
email2accountIdx = {
  "joe-a@m.com": 0,
  "johna@m.com": 0,
  "a_joe@m.com": 1,
  "joe_b@m.com": 2,
  "joe-b@m.com": 2,
  "b_joe@m.com": 2,
  "mary@m.com": 4
}

for index 3 where a_joe@m.com is already seen, we then merge group 3 with
group 1.
for index 3 where joe-a@m.com, we merge the newly merge group (1 and 3)
with group 0.


// keep track of group partitioning
// if we have it on our table,

mergedAccounts = [
  [john,
  joe-a@mail.com,
  johna@mail.com,
  a_joe@mail.com],
  [John,
  joe_b@mail.com,
  joe-b@mail.com,
  b_joe@mail.com],

  [Mary,
  mary@mail.com]
]

**/


var accountsMerge = function (accounts) {
    const parents = {};
    const email2name = {};

    const find = (x) => {
        if (parents[x] !== x) {
            parents[x] = find(parents[x]);
        }

        return parents[x];
    };

    const union = (x, y) => {
        parents[find(x)] = find(y);
    };

    for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            if (!parents[email]) {
                parents[email] = email;
            }

            email2name[email] = name;
            union(email, emails[0]);
        }
    }

    const emails = {};
    for (const email of Object.keys(parents)) {
        const parent = find(email);
        if (parent in emails) {
            emails[parent].push(email);
        } else {
            emails[parent] = [email];
        }
    }

    return Object.entries(emails).map(([email, x]) => [email2name[email],
    ...x.sort()]);
};

/**
parents {
  'johnsmith@mail.com': 'johnsmith@mail.com',
  'john_newyork@mail.com': 'johnsmith@mail.com',
  'john00@mail.com': 'johnsmith@mail.com',
  'mary@mail.com': 'mary@mail.com',
  'johnnybravo@mail.com': 'johnnybravo@mail.com'
}

email2name {
  'johnsmith@mail.com': 'John',
  'john_newyork@mail.com': 'John',
  'john00@mail.com': 'John',
  'mary@mail.com': 'Mary',
  'johnnybravo@mail.com': 'John'
}


emails:

{
  'johnsmith@mail.com': [ 'johnsmith@mail.com', 'john_newyork@mail.com', 'john00@mail.com' ],
  'mary@mail.com': [ 'mary@mail.com' ],
  'johnnybravo@mail.com': [ 'johnnybravo@mail.com' ]
}
**/
