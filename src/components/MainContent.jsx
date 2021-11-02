import { Route, Switch, Redirect } from "react-router-dom";
import { StreamsSection } from "./StreamsSection";
import { StreamDetail } from "./StreamDetail";
export const MainContent = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-200 p-4">
      <Switch>
        <Route
          path="/streams/:streamId"
          render={({ match }) => (
            <StreamDetail streamId={match.params.streamId} />
          )}
        />
        <Route path="/">
          <StreamsSection />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
