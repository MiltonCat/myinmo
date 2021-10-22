import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";

const Contact = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="first name"
                placeholder="fast-name"
                variant="outline"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
