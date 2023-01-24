const mockGetResource = jest.fn();

jest.mock('../../src/hashicorp-aws/helpers', () => ({
  getResource: mockGetResource
}));

import { TfDiff } from '@tinystacks/precloud';
import { parseS3Bucket } from '../../src/hashicorp-aws';

describe('Terraform S3 Module Parser Tests', () => {
  afterEach(() => {
    // for mocks
    jest.resetAllMocks();
    // for spies
    jest.restoreAllMocks();
  });
  it('parseS3Bucket', () => {
    mockGetResource.mockReturnValue({
      bucket: 'smoke-test-bucket'
    });
    
    const mockDiff: TfDiff = {} as TfDiff;

    const parsedBucket = parseS3Bucket(mockDiff, {}, [], []);

    expect(parsedBucket).toHaveProperty('Name', 'smoke-test-bucket');
  });
});