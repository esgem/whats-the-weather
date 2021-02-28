import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => {
    spectator = createComponent();
  });
  
  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have the correct title`, () => {
    expect(spectator.query('h1')).toHaveText('What\'s the weather');
  });
  

});
