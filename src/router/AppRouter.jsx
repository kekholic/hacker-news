import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AllStories from '../pages/AllStoriesPage/AllStories';
import Header from '../components/Header/Header';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import StoryItemPage from '../pages/StoryItemPage/StoryItemPage';

const AppRouter = () => {
  return (
      <BrowserRouter>       
          <Header />
          <Switch>
            <Route path="/" render={() => <Redirect to="/new" />} exact={true} />
            <Route path='/new' component={AllStories} />
            <Route path='/story/:id' component={StoryItemPage} />
            <Route component={PageNotFound} />
          </Switch>
      </BrowserRouter>
  );
};

export default AppRouter;