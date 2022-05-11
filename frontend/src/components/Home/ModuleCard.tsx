import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function ModuleCard({ content, link }: any) {
  const card = content;
  return (
    <Box sx={{ maxWidth: 400, margin: 15}}>
      <Link href={link} underline="none" color="inherit">
        <Card sx={{backgroundColor: "pink"}} >
          <CardContent sx={{ fontSize: 30 }}>{card}</CardContent>
        </Card>
      </Link>
    </Box>
  );
}
