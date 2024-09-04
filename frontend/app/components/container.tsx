// Define the properties of the container
type Props = {
    // children? -> optional children of any valid react node
    children?: React.ReactNode;
};


/* Functional component
 * mx-auto: automatic horizonal margins
 * px-5: left and right padding on div
 */
const Container = ({children}: Props) => {
    return <div className="container mx=auto px-5">{children}</div>;
};

export default Container;