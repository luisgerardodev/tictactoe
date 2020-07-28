import React from 'react';
import { Grid, Card, Icon, Image, Table } from 'semantic-ui-react';

const Board = () => (
  <Grid centered columns={3}>
    <Grid.Column>
        <Card>
            <Table fixed celled
 textAlign={"center"}>
                <Table.Body>
                <Table.Row>
                    <Table.Cell><Icon name='circle outline'/></Table.Cell>
                    <Table.Cell><Icon name='times'/></Table.Cell>
                    <Table.Cell>O</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>O</Table.Cell>
                    <Table.Cell>O</Table.Cell>
                    <Table.Cell>X</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>X</Table.Cell>
                    <Table.Cell>O</Table.Cell>
                    <Table.Cell>O</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </Card>
    </Grid.Column>
  </Grid>
)

export default Board;