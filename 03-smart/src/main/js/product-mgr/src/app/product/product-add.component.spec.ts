/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductAddComponent } from './product-add.component';

describe('Component: ProductAdd', () => {
  it('should create an instance', () => {
    let component = new ProductAddComponent();
    expect(component).toBeTruthy();
  });
});
