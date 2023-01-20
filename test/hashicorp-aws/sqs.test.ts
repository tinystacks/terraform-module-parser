const mockGetResource = jest.fn();

jest.mock('../../src/hashicorp-aws/helpers', () => ({
  getResource: mockGetResource
}));

import { TfDiff } from '@tinystacks/predeploy-infra';
import { parseSqsQueue } from '../../src/hashicorp-aws';

describe('Terraform SQS Module Parser Tests', () => {
  afterEach(() => {
    // for mocks
    jest.resetAllMocks();
    // for spies
    jest.restoreAllMocks();
  });
  it('parseSqsQueue', () => {
    mockGetResource.mockReturnValue({
      name: 'smoke-test-queue',
      visibility_timeout_seconds: 45
    });
    
    const mockDiff: TfDiff = {} as TfDiff;

    const parsedQueue = parseSqsQueue(mockDiff, {}, [], []);

    expect(parsedQueue).toHaveProperty('QueueName', 'smoke-test-queue');
    expect(parsedQueue).toHaveProperty('Attributes', {
      'visibility_timeout_seconds': 45
    });
  });
});