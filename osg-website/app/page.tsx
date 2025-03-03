import { Container, Box, Typography, Button, Card, CardContent, Grid, Link } from '@mui/material';
import Image from 'next/image';

export default function Page() {
  return (
      <Container maxWidth="xl">
        <Box id="hero-image" sx={{ height: { xs: '75vh', md: '50vh' }, display: 'flex', alignItems: 'center' }}>
          <Container maxWidth="xl">
            <Grid container justifyContent="center">
              <Grid item xs={12} md={6} sx={{ order: { md: 2 } }}>
                <Image src="/path/to/image.jpg" alt="Hero Image" layout="responsive" width={500} height={300} />
              </Grid>
              <Grid item xs={12} md={6} sx={{ order: { md: 1 } }}>
                <Box sx={{ p: 3, my: 3, display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                  <Typography variant="h3">Hero Title</Typography>
                  <hr />
                  <Box sx={{ minHeight: 150 }}>
                    <Typography variant="body1">Hero excerpt content goes here.</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Button variant="contained" color="primary" href="/path/to/button1">Button 1</Button>
                    <Button variant="contained" color="primary" href="/path/to/button2">Button 2</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item md={8}>
              <Typography variant="h1">The OSG Consortium</Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                Established in 2005, the OSG Consortium operates a fabric of distributed High Throughput Computing (dHTC) services in support of the National Science & Engineering community...
              </Typography>
              <Box sx={{ p: 3, my: 4, bgcolor: 'white', boxShadow: 3 }}>
                <Typography variant="h3" align="center">We are here to help with your CC* Proposal (NSF 24-530)!</Typography>
                <Typography align="center">
                  Campuses with awards from the NSF Campus Cyberinfrastructure (CC*) Program play an important role in supporting Open Science...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                  <Button variant="contained" color="primary" href="mailto:cc-star-proposals@osg-htc.org">Email Us</Button>
                  <Button variant="contained" color="primary" href="/campus-cyberinfrastructure#let-the-path-team-help-with-your-proposal">How We Can Help</Button>
                </Box>
              </Box>
              <Typography variant="h5"><Link href="/services/open_science_pool.html">Open Science Pool</Link></Typography>
              <Typography variant="body1">
                Any researcher performing Open Science in the US can become an OSPool user...
              </Typography>
              <Typography variant="h5"><Link href="/services/osdf.html">Open Science Data Federation (OSDF)</Link></Typography>
              <Typography variant="body1">
                The Open Science Data Federation (OSDF) enables users and institutions to share data files and storage capacity...
              </Typography>
              <ul>
                <li>Provides campuses and researchers with the ability to manage their data files...</li>
                <li>Improves file access performance, resource consumption and reliability...</li>
                <li><Link href="https://portal.osg-htc.org/documentation/htc_workloads/managing_data/overview/">OSG-Operated Access Points</Link> provide researchers with a default of 500GB of storage space on the OSDF.</li>
              </ul>
              <Typography variant="h5">Throughput Computing Week 2025</Typography>
              <Typography variant="body1">
                You are invited to Throughput Computing Week 2025 (HTC25) in beautiful Madison, Wisconsin, the week of June 2-6, 2025...
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3"><Link href="/events.html">Events</Link></Typography>
                  <hr />
                  {/* Include future events here */}
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h3"><Link href="/news.html">News</Link></Typography>
                  <hr />
                  {/* Include news here */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ bgcolor: 'lightgray', py: 4 }}>
          <Container maxWidth="xl">
            <Typography variant="h2">OSG By Maps</Typography>
            <Grid container spacing={2}>
              {/* Include maps here */}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ bgcolor: 'darkgray', py: 4, mb: 4 }}>
          <Container maxWidth="xl">
            <Typography variant="h2" color="white">User Spotlights</Typography>
            <Box sx={{ border: 1, borderColor: 'lightgray', borderRadius: 3, p: 2 }}>
              <Grid container justifyContent="center" spacing={2}>
                {/* Include spotlights here */}
              </Grid>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3">What We Do</Typography>
                  <hr />
                  <Typography variant="body1">
                    The OSG facilitates access to distributed high throughput computing for research in the US...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3">Submit Locally, Run Globally</Typography>
                  <hr />
                  <Typography variant="body1">
                    Researchers can run jobs on OSG from their home institution or an OSG-Operated Access Point...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3">Sharing Is Key</Typography>
                  <hr />
                  <Typography variant="body1">
                    Sharing is a core principle of the OSG...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3">Resource Providers</Typography>
                  <hr />
                  <Typography variant="body1">
                    The OSG consists of computing and storage elements at over 100 individual sites spanning the United States...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3">The OSG Software Stack</Typography>
                  <hr />
                  <Typography variant="body1">
                    The OSG provides an integrated software stack to enable high throughput computing...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h3">Coordinating CI Services</Typography>
                  <hr />
                  <Typography variant="body1">
                    NSF’s Blueprint for National Cyberinfrastructure Coordination Services lays out the need for coordination services...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ bgcolor: 'lightgray', my: 4 }}>
          <Container maxWidth="xl">
            <Typography variant="h3">Find Us!</Typography>
            <Typography variant="body1">
              Are you a resource provider wanting to join our collaboration? Contact us: <Link href="mailto:support@osg-htc.org">support@osg-htc.org</Link>.
            </Typography>
            <Typography variant="body1">
              Are you a user wanting more computing resources? Check with your 'local' computing providers, or consider using an OSG-Operated Access Point...
            </Typography>
            <Typography variant="body1">
              For any other inquiries, reach us at: <Link href="mailto:support@osg-htc.org">support@osg-htc.org</Link>.
            </Typography>
            <Typography variant="body1">
              To see the breadth of the OSG impact, <Link href="https://gracc.opensciencegrid.org">explore our accounting portal</Link>.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="xl">
          <Card>
            <CardContent>
              <Typography variant="h3">Support</Typography>
              <Typography variant="body1" color="textSecondary">
                The activities of the OSG Consortium are supported by multiple projects and in-kind contributions from members...
              </Typography>
              <hr />
              <Grid container justifyContent="center" spacing={4}>
                <Grid item md={10} lg={8}>
                  <Card>
                    <CardContent>
                      <Image src="/assets/images/logos/Logo_Round_Med.png" alt="PATh Logo" width={100} height={100} />
                      <Typography variant="h4">PATh</Typography>
                      <Typography variant="body1">
                        The Partnership to Advance Throughput Computing (PATh) is an NSF-funded project to address the needs of the rapidly growing community...
                      </Typography>
                      <Link href="https://path-cc.io/">Learn more</Link>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={10} lg={8}>
                  <Card>
                    <CardContent>
                      <Image src="/assets/images/logos/IRIS_HEP.png" alt="Iris-Hep Logo" width={100} height={100} />
                      <Typography variant="h4">IRIS-HEP</Typography>
                      <Typography variant="body1">
                        The Institute for Research and Innovation in Software for High Energy Physics (IRIS-HEP) is an NSF-funded software institute...
                      </Typography>
                      <Link href="https://iris-hep.org/">Learn more</Link>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Container>
  );
}