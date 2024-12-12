import { useParams } from "react-router-dom";

const RouteComponent = ({ component: Component }: { component: React.ComponentType<{ id: string | undefined }> }) => {
    const { id } = useParams();
    return <Component id={id} />;
  };
export default RouteComponent  