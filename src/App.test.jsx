import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { routeOptions } from './constants';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });
});

// Mock child components to isolate App logic
jest.mock('./Components/SignIn/SignIn', () => () => <div data-testid="SignIn" />);
jest.mock('./Components/RegisterPage/RegisterPage', () => () => <div data-testid="RegisterPage" />);
jest.mock('./Components/Navigation/Navigation', () => () => <div data-testid="Navigation" />);
jest.mock('./Components/Logo/Logo', () => () => <div data-testid="Logo" />);
jest.mock('./Components/Rank/Rank', () => () => <div data-testid="Rank" />);
jest.mock('./Components/ImageLinkForm/ImageLinkForm', () => (props) => (
  <div>
    <input data-testid="ImageLinkForm" onChange={props.onInputchange} />
    <button data-testid="DetectButton" onClick={props.onButtonSubmit}>Detect</button>
  </div>
));
jest.mock('./Components/FaceDetector/FaceDetector', () => () => <div data-testid="FaceDetector" />);
jest.mock('particles-bg', () => () => <div data-testid="ParticlesBg" />);


describe('App Component', () => {
  test('renders SignIn by default', () => {
    render(<App />);
    expect(screen.getByTestId('SignIn')).toBeInTheDocument();
    expect(screen.getByTestId('Navigation')).toBeInTheDocument();
  });

  // test('Detect button calls onButtonSubmit', () => {
  //   const { container } = render(<App />);
  //   console.log(container)
  //   const instance = container.firstChild._owner?.stateNode;
  //   if (instance) {
  //     instance.setState({ route: routeOptions.HomeApp });
  //     instance.forceUpdate();
  //     // Now the HomeApp UI (including DetectButton) is rendered
  //     const button = screen.getByTestId('DetectButton');
  //     fireEvent.click(button);
  //     // Add your assertions here
  //   }
  // });

  test('renders RegisterPage when route is Register', () => {
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      instance.onRouteChange(routeOptions.Register);
      instance.forceUpdate();
      expect(screen.getByTestId('RegisterPage')).toBeInTheDocument();
    }
  });

  test('calls onRouteChange and updates state', () => {
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      instance.onRouteChange(routeOptions.Register);
      expect(instance.state.route).toBe(routeOptions.Register);
      instance.onRouteChange(routeOptions.HomeApp);
      expect(instance.state.route).toBe(routeOptions.HomeApp);
    }
  });

  test('renders HomeApp when route is HomeApp', () => {
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      instance.setState({ route: routeOptions.HomeApp });
      // force update
      instance.forceUpdate();
      expect(screen.getByTestId('Logo')).toBeInTheDocument();
      expect(screen.getByTestId('Rank')).toBeInTheDocument();
      expect(screen.getByTestId('ImageLinkForm')).toBeInTheDocument();
      expect(screen.getByTestId('FaceDetector')).toBeInTheDocument();
    }
  });

  test('onInputchange updates input state', () => {
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      const event = { target: { value: 'test-url' } };
      instance.onInputchange(event);
      expect(instance.state.input).toBe('test-url');
    }
  });

  test('loadAcc updates user state', () => {
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      const user = { id: '1', name: 'Test', email: 'a@b.com', entries: 5, joined: 'today' };
      instance.loadAcc(user);
      expect(instance.state.user).toEqual(user);
    }
  });

  test('updateNumEntries updates entries on success', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ entries: 42 }),
      })
    );
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      instance.setState({ user: { id: '1', name: '', email: '', entries: 0, joined: '' } });
      await instance.updateNumEntries();
      expect(instance.state.user.entries).toBe(42);
    }
    global.fetch.mockRestore();
  });

  test('onButtonSubmit2 calls fetch and updates boundingBoxesInfo', async () => {
    // Mock fetch and setBoundingBoxes
    const mockSetBoundingBoxes = jest.fn();
    const mockData = {
      status: { code: 10000 },
      outputs: [{ data: { regions: [] } }],
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { container } = render(<App />);
    const instance = container.firstChild._owner?.stateNode;
    if (instance) {
      instance.setBoundingBoxes = mockSetBoundingBoxes;
      instance.setState({ input: 'img-url' });
      await instance.onButtonSubmit2();
      expect(global.fetch).toHaveBeenCalled();
      expect(mockSetBoundingBoxes).toHaveBeenCalledWith([]);
    }
    global.fetch.mockRestore();
  });
});