import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { centerAlign } from "../../styles/styles";

export default function CookiesPolicy() {
  return (
    <Box className="cookies-body">
      <Grid container spacing={2}>
        <Grid item xs={12} sx={centerAlign}>
          <Typography variant="h1" sx={{ fontSize: "28px" }}>
            Cookie Policy
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            WHEATHER LIKE uses cookies to collect information about your online
            preferences. Cookies are small pieces of information sent by a web
            server to a web browser that allows the server to uniquely identify
            the browser on each page. Where possible, we have noted your ability
            to disable a cookie or opt out of its use on our Platforms.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Strictly Necessary or Essential Cookies
          </Typography>
          <Typography variant="body2">
            A type of first-party cookie, these cookies are essential in order
            to enable you to move around the Platforms and use their features.
            Without these cookies, some services you have requested, such as
            maintaining a record of your purchased items (e.g. a shopping cart),
            cannot be provided. These are a type of “session” cookie, which
            expire immediately or within a few seconds of you leaving the web
            browser. This category of cookies cannot be disabled.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Functionality Cookies
          </Typography>
          <Typography variant="body2">
            A type of first party cookie, these cookies remember choices you
            make such as the country from which you visit our Platforms, your
            preferred language, and your search parameters. This information can
            then be used to provide you with an experience more appropriate to
            your selections and to make your return visits to our Platforms more
            tailored to your preferences. The information in these cookies may
            be anonymised. These cookies cannot track your browsing activity on
            other websites. This category of cookies cannot be disabled, but can
            be cleared after each visit to our Platform(s).
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Performance or Analytics Cookies
          </Typography>
          <Typography variant="body2">
            These cookies collect anonymous information on how people use our
            Platforms to help us understand how customers arrive at our site,
            browse or use our site and highlight areas where we can improve,
            such as navigation. The data stored by these cookies never shows
            personal details from which your individual identity can be
            established.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Targeting cookies or advertising cookies
          </Typography>
          <Typography variant="body2">
            These cookies collect information about your browsing habits in
            order to make advertising more relevant to you and your interests.
            These cookies are also used to limit the number of times you see an
            advertisement as well as help measure the effectiveness of an
            advertising campaign. Third party advertisers or advertising
            networks place these cookies. These cookies remember the websites
            you visit and that information is shared with other parties such as
            advertisers.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Secure cookies
          </Typography>
          <Typography variant="body2">
            These cookies can only be transmitted over an encrypted connection,
            such as HTTPS. Mostly, checkout or payment pages of e-commerce
            websites have secure cookies to facilitate safer transactions.
            Online banking websites also use secure cookies for security
            reasons.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            HTTP-Only cookies
          </Typography>
          <Typography variant="body2">
            These cookies can only be accessed by a server and prevents XSS
            (cross-site script) vulnerabilities, minimizing the chance of hacks.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Flash cookies
          </Typography>
          <Typography variant="body2">
            These cookies use the Flash plugin to hide cookies from your
            browser’s native cookie management tools. They are available to all
            browsers and can hold 100KB of data compared to an HTTP cookie’s
            4KB.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontSize: "18px" }}>
            Zombie cookies
          </Typography>
          <Typography variant="body2">
            These cookies are closely tied to Flash cookies. A zombie cookie can
            instantly recreate itself if someone deletes it. The recreation is
            possible thanks to backups stored outside a browser’s regular cookie
            storage folder—often as a Flash Local Shared Object or as HTML5 Web
            Storage.
          </Typography>
          <Typography variant="body2">
            Of course, if you do not wish to have cookies on your devices, you
            may turn them off at any time by modifying your Internet browser’s
            settings. These settings are typically found in the “options” or
            “preferences” menu of your browser. However, by disabling cookies on
            your device, you may be prohibited from full use of the platform’s
            features or lose access to some functionality. If you want to remove
            cookies that were placed on your device in the past, you can
            manually delete cookies at any time. However, this will not prevent
            our Platform(s) from placing further cookies on your device unless
            you adjust your settings as stated above.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
