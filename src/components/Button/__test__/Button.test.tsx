import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Button from "../Button";

describe('Button', () => {
  it('should render Button', () => {
    render(<Button label="label"/>)
    expect(screen.getByText('label')).toBeInTheDocument()
  })

  it('should call click handler', async () => {
    // this is a mock function
    const clickHandler = jest.fn()
    render(<Button label="label" onClick={clickHandler}/>)

    // make sure the mock function is not called
    expect(clickHandler).not.toBeCalled()

    const button = screen.getByText('label')

    // simulate click on the button
    await userEvent.click(button)

    // make sure the mock function is called
    expect(clickHandler).toBeCalled()
  })

  it('should be disabled', async () => {
    render(<Button label="label" disabled/>)

    // make sure the button is disabled
    expect(screen.getByText('label')).toBeDisabled()
  })

  it('should be have default style', async () => {
    render(<Button label="label"/>)

    // make sure the button has default style
    expect(screen.getByText('label')).toHaveClass('button-default')
  })

  it('should be have primary style', async () => {
    render(<Button label="label" color="primary"/>)

    // make sure the button has primary style
    expect(screen.getByText('label')).toHaveClass('button-primary')
  })

  it('should be have secondary style', async () => {
    render(<Button label="label" color="secondary"/>)

    // make sure the button has secondary style
    expect(screen.getByText('label')).toHaveClass('button-secondary')
  })
})


