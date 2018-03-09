import React from "react";
import {Table} from 'react-bootstrap';

const GradebookTable = () => {
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto@shit.edu</td>
                <td>B</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton@shit.edu</td>
                <td>A</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Larry</td>
                <td>gird@shit.edu</td>
                <td>F-</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default GradebookTable;

//now this is not how the code will actually look like
//the individual students will be pulled into the
//GradebookStudent function, then displayed
//here.  Need a DB first to try

//This is what I think it may look like
// const GradebookTable =({children}) => {
//     <Table striped bordered condensed hover>
//             <thead>
//                 <tr>
//                 <th>#</th>
//                 <th>First Name</th>
//                 <th>Email</th>
//                 <th>Grade</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {children}
//             </tbody>
//     </Table>
// }
