import { Route, Switch, Redirect } from "react-router-dom";
import { StreamsSection } from "./StreamsSection";
import { StatsSection } from "./StatsSection";
import { ResourcesSection } from "./ResourcesSection";
import { StreamDetail } from "./StreamDetail";
export const MainContent = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-200 p-4 justify-between">
      <Switch>
        <Route
          path="/streams/:streamId"
          render={({ match }) => (
            <StreamDetail streamId={match.params.streamId} />
          )}
        />
        <Route path="/streams">
          <StreamsSection />
        </Route>
        <Route path="/stats">
          <StatsSection />
        </Route>
        <Route path="/resources">
          <ResourcesSection />
        </Route>
        <Redirect to="/streams" />
      </Switch>
    </div>
  );
};
