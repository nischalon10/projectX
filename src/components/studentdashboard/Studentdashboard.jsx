import React from 'react';
import './studentdashboard.css';
import { Page, Navbar, List, ListButton } from 'framework7-react';

import studentdashboard from "studentdashboard";

<Router>
  <Route exact path="/insert/your/path/here" component={YourComponent} />
</Router>

const studentdashboard = () => {
  return (
    <div>Studentdashboard
        <a href="https://react.school" target="_blank">
            <Button> Link Button </Button>
        </a>
    </div>
  )
}

// export default studentdashboard


export default () => (
  <Page>
    <Navbar title="List Button" />
    <List>
      <ListButton title="List Button 1" />
      <ListButton title="List Button 2" />
      <ListButton title="List Button 3" />
    </List>

    <List inset>
      <ListButton title="List Button 1" />
      <ListButton title="List Button 2" />
      <ListButton title="List Button 3" />
    </List>

  </Page>
    
  
);
