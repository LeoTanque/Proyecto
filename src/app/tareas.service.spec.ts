import { TestBed } from '@angular/core/testing';

import { TareasService } from './tareas.service';
import { HttpClientModule } from '@angular/common/http';

describe('TareasService', () => {
  let service: TareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    providers: [TareasService]
    });
    service = TestBed.inject(TareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
