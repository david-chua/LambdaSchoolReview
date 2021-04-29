import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders without errors", () => {
  render(<AnimalForm />);
});

test('form is filled out, submitted and adds new animal', () => {
  // render
  render(<AnimalForm />);

  // query for all inputs
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesINput = screen.getByLabelText(/notes/i);

  // type into inputs
  userEvent.type(speciesInput, "Tiger");
  userEvent.type(ageInput, "3");
  userEvent.type(notesINput, "docile, kind, fat");

  // query for button
  const submitButton = screen.getByRole('button', {name: /submit/i });

  // click button
  userEvent.click(submitButton);

  // query for the text "Tiger"
  let tigerText = screen.queryByText(/tiger/i);

  // assert
  expect(tigerText).toBeInTheDocument();

})
