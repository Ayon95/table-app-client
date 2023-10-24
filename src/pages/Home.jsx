import InfiniteScrollingPeopleTable from '../features/people/InfiniteScrollingPeopleTable';
import PeopleTable from '../features/people/PeopleTable';
import Navbar from '../ui/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Table App</h1>
        <PeopleTable />
        <InfiniteScrollingPeopleTable />
      </main>
    </>
  );
}

export default Home;
