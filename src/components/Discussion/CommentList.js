import React from "react";
import {Avatar, List, Divider, ListItem} from "material-ui";
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import User1 from "images/user1-128.jpg";
import User2 from "images/user2-128.jpg";
import User3 from "images/user3-128.jpg";
import User4 from "images/user4-128.jpg";
import User5 from "images/user5-128.jpg";

export default function DiscussionList(props) {
  return (
    <List>
      <ListItem
        leftAvatar={<Avatar src={User1}/>}
        primaryText="Payback Method?"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Brendan Lim</span> --
            What is the main Difference to the Payback Method?
          </p>
        }
        secondaryTextLines={2}
        nestedItems={[
          <ListItem
            leftAvatar={<Avatar src={User2}/>}
            primaryText="Payback Method"
            secondaryText={"Under the payback period method, a company estimates how much it will cost to launch the project and how much money the project will generate once it's up and running. It then calculates how long it will take the project to \"break even,\" or generate enough money to cover the startup costs. Companies using the payback period method typically choose a time horizon -- for example, 2, 5 or 10 years. If a project can \"pay back\" the startup costs within that time horizon, it's worth doing; if it can't, the project will be rejected. When deciding between projects, choose the one with the shorter payback period."}
            secondaryTextLines={2}
          />
        ]}
      />
      <Divider inset={true}/>
      <ListItem
        leftAvatar={<Avatar src={User3}/>}
        primaryText="Combining Methods"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Grace Ng</span> --
            Many businesses use a combination of methods when making capital budgeting decisions. A company could use the payback period method to narrow down its options, then apply the NPV method to identify the best of the remaining projects. Or it could use the NPV method to separate the "winners" from the "losers" among possible projects, then look at payback periods to see which projects return their costs more quickly.
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true}/>
      <ListItem
        leftAvatar={<Avatar src={User4}/>}
        primaryText="Pros and Cons"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Kerem Suer</span> --
            The payback period method has some key weakness that the NPV method does not. One is that the payback method doesn't take into account inflation and the cost of capital. It essentially equates $1 today with $1 at some point in the future, when in fact the purchasing power of money declines over time. Another is that the payback method ignores all cash flows beyond the time horizon -- and those cash flows may be substantial. Big moneymakers, after all, sometimes take a while to get going. On the other hand, the big drawback of the NPV method lies in its assumptions. If you don't get your estimate of the discount rate correct, your calculation will be off -- and you won't know it until the project turns into a big money-loser.
          </p>
        }
        secondaryTextLines={2}
      />
      {/*
      <Divider inset={true}/>
      <ListItem
        leftAvatar={<Avatar src={User5}/>}
        primaryText="Recipe to try"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Raquel Parrado</span> --
            We should eat this: grated squash. Corn and tomatillo tacos.
          </p>
        }
        secondaryTextLines={2}
      />
      */}
    </List>
  )
}

