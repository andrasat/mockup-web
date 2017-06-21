import React from 'react';

import HomeSlider from './slider'

export default class Home extends React.Component {

  render() {
    return (
      <div className="columns is-multiline">
        <div className="column is-12">
          <HomeSlider/>
        </div>
        <div className="column is-12">
          <div className="container">
            <div className="content">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta erat et feugiat interdum. Vivamus in sem libero. Donec interdum semper augue. Morbi mattis dapibus quam, sed fringilla erat dictum ultricies. Praesent semper nunc sit amet arcu semper, imperdiet interdum orci viverra. Quisque venenatis nisi ut justo gravida, eget eleifend urna dapibus. Sed vitae viverra dui. Donec sit amet tristique tellus, vel sagittis ante.</p>

              <p>Nulla facilisi. Aliquam consequat magna in auctor malesuada. Aliquam arcu augue, gravida venenatis est nec, vestibulum dapibus felis. Aenean luctus erat justo, quis condimentum ligula convallis sit amet. Donec rhoncus metus ac erat suscipit, nec lobortis ipsum dictum. In nec libero ac risus mattis fringilla vitae eu orci. Ut sodales, nisi vitae malesuada venenatis, libero turpis blandit libero, tempus egestas ipsum lacus et augue. Suspendisse ultrices congue neque eget tempor. Proin in porta ipsum. Donec ultrices lacus vitae finibus molestie. Nunc rutrum nibh at suscipit consectetur. Integer ullamcorper laoreet ligula in pretium. Quisque felis sem, cursus ut lacus sed, volutpat sagittis justo. Donec nec lacinia eros.</p>

              <p>Integer auctor leo sit amet lorem tincidunt aliquet. Integer sit amet justo vel ante varius cursus. Ut nibh nisi, rutrum vitae posuere eu, varius at dolor. Fusce efficitur ac augue sed laoreet. Sed id blandit libero. Maecenas ac metus et erat varius auctor id vitae lorem. Vivamus maximus maximus leo. Praesent ornare, sem a condimentum cursus, velit est ullamcorper felis, vel vehicula arcu lorem sit amet dui. Curabitur at sodales sem. Vestibulum ligula dolor, ultricies id finibus a, blandit at diam. Etiam rhoncus id magna non sollicitudin. Duis vel augue id sem porttitor auctor. Sed ipsum arcu, consectetur vel commodo ac, placerat in sapien. Nullam ac ultrices metus. Fusce id velit condimentum, bibendum est in, vestibulum urna. Praesent ut nisl a ex sagittis mollis.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}