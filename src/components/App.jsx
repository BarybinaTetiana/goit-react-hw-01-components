import { Layout } from './Layout.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { user, data, friends, transactions } from '../data/index';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Layout>
  );
};
